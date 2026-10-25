import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "..", "src", "content", "data.json");
const outPath = path.join(__dirname, "..", "public", "resume.pdf");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const doc = new PDFDocument({
  margin: 48,
  size: "LETTER",
  info: {
    Title: `${data.name} — Resume`,
    Author: data.name,
  },
});

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

const ink = "#0f172a";
const muted = "#475569";
const accent = "#0f766e";

function heading(text) {
  doc.moveDown(0.6);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(accent).text(text.toUpperCase());
  doc
    .moveTo(doc.page.margins.left, doc.y + 2)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 2)
    .strokeColor("#cbd5e1")
    .lineWidth(0.5)
    .stroke();
  doc.moveDown(0.45);
  doc.fillColor(ink);
}

function bullet(text) {
  const x = doc.page.margins.left;
  const textX = x + 12;
  const width = doc.page.width - doc.page.margins.right - textX;
  const y = doc.y;
  doc.font("Helvetica").fontSize(9.5).fillColor(ink);
  doc.text("•", x, y, { continued: false, width: 10 });
  doc.text(text, textX, y, { width, align: "left", lineGap: 1.5 });
  doc.moveDown(0.2);
}

doc.font("Helvetica-Bold").fontSize(22).fillColor(ink).text(data.name);
doc.font("Helvetica").fontSize(11).fillColor(accent).text(data.role);
doc.moveDown(0.25);
doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor(muted)
  .text(
    `${data.location}  |  ${data.email}  |  ${data.phone}  |  LinkedIn  |  GitHub`,
  );

heading("Summary");
data.summary.forEach(bullet);

heading("Technical Skills");
data.skills.forEach((group) => {
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(ink)
    .text(`${group.category}: `, { continued: true });
  doc.font("Helvetica").fillColor(ink).text(group.items.join(", "));
  doc.moveDown(0.12);
});

heading("Experience");
data.experience.forEach((job, index) => {
  if (index > 0) doc.moveDown(0.35);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(ink)
    .text(
      `${job.title} | ${job.company} | ${job.location} | ${job.employmentType}`,
      { continued: true },
    );
  doc.font("Helvetica").fillColor(muted).text(`  ${job.period}`);
  job.bullets.forEach(bullet);
});

if (data.featuredProjects?.length) {
  heading("Projects");
  data.featuredProjects.forEach((project, index) => {
    if (index > 0) doc.moveDown(0.25);
    doc.font("Helvetica-Bold").fontSize(10).fillColor(ink).text(project.name);
    bullet(project.description);
    if (project.stack?.length) {
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor(muted)
        .text(`Stack: ${project.stack.join(", ")}`);
      doc.moveDown(0.15);
    }
  });
}

heading("Education");
data.education.forEach((item, index) => {
  if (index > 0) doc.moveDown(0.35);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(ink).text(item.degree);
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(muted)
    .text(`${item.school}, ${item.location}  |  ${item.period}`);
});

doc.end();

await new Promise((resolve, reject) => {
  stream.on("finish", resolve);
  stream.on("error", reject);
});

console.log(`Wrote ${outPath}`);
