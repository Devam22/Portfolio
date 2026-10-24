import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "resume.pdf");

const doc = new PDFDocument({
  margin: 48,
  size: "LETTER",
  info: {
    Title: "Devam Zanzmera — Resume",
    Author: "Devam Zanzmera",
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
  const bulletX = x;
  const textX = x + 12;
  const width = doc.page.width - doc.page.margins.right - textX;
  const y = doc.y;
  doc.font("Helvetica").fontSize(9.5).fillColor(ink);
  doc.text("•", bulletX, y, { continued: false, width: 10 });
  doc.text(text, textX, y, { width, align: "left", lineGap: 1.5 });
  doc.moveDown(0.2);
}

// Header
doc.font("Helvetica-Bold").fontSize(22).fillColor(ink).text("Devam Zanzmera");
doc
  .font("Helvetica")
  .fontSize(11)
  .fillColor(accent)
  .text("AI/ML Engineer");
doc.moveDown(0.25);
doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor(muted)
  .text(
    "Toronto, Canada  |  devamzanzmera22@gmail.com  |  +1 647-577-9653  |  LinkedIn  |  GitHub",
  );

heading("Summary");
[
  "AI/ML Engineer with 3+ years of production experience building and deploying machine learning models with SHAP explainability for healthcare and banking, deployed via FastAPI/Docker on AWS and Azure.",
  "Beyond core production work, built independent projects spanning NLP and retrieval (LangChain, Hugging Face embeddings, ChromaDB), real-time data pipelines (Kafka, BERT-based multilingual sentiment analysis), and computer vision (YOLOv8 object detection and tracking).",
  "Comfortable working across the ML lifecycle from data pipelines and feature engineering to model evaluation, explainability, and production deployment.",
].forEach(bullet);

heading("Technical Skills");
const skills = [
  ["Programming Languages", "Python, SQL, Bash"],
  [
    "Data Analytics",
    "Pandas, NumPy, Matplotlib, Seaborn, Plotly, Power BI",
  ],
  [
    "ML & Deep Learning",
    "PyTorch, TensorFlow, Keras, Scikit-learn, XGBoost, Hugging Face Transformers",
  ],
  ["Computer Vision", "YOLOv8, Object Detection, Object Tracking, Roboflow"],
  [
    "Generative AI & NLP",
    "GPT-4, LLaMA, BERT, RAG, Prompt Engineering, Agentic AI",
  ],
  [
    "LLM Ops & Tooling",
    "LangChain, LangGraph, Pinecone, FAISS, Chroma DB, Vector Databases",
  ],
  [
    "ML Ops & Deployment",
    "MLflow, Docker, Kubernetes, GitHub Actions, CI/CD, FastAPI, Django",
  ],
  ["Cloud", "AWS (SageMaker, Lambda, EC2), Azure (ML Studio, Databricks)"],
  [
    "Big Data & Pipelines",
    "Databricks, Apache Spark, PySpark, Kafka, Airflow, Feature Engineering",
  ],
  [
    "Databases",
    "MySQL, PostgreSQL, SQL Server, MongoDB, Elasticsearch",
  ],
  [
    "Model Evaluation",
    "SHAP, ROC-AUC, F1 Score, Precision, Recall, Cross-Validation",
  ],
];

skills.forEach(([label, value]) => {
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(ink)
    .text(`${label}: `, { continued: true });
  doc.font("Helvetica").fillColor(ink).text(value);
  doc.moveDown(0.12);
});

heading("Experience");

doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(ink)
  .text("AI/ML Engineer | Oracle Health | Toronto, Canada | Contract", {
    continued: true,
  });
doc.font("Helvetica").fillColor(muted).text("  06/2024 – Present");
[
  "Developed patient risk stratification system for Oracle Health Canada to accurately predict hospital readmissions across three Canadian provinces, enabling early clinical intervention for high-risk patients.",
  "Engineered PIPEDA-compliant data pipelines using Databricks to extract, validate, and process patient EHR records from legacy Oracle systems.",
  "Built feature engineering process using PySpark to transform raw clinical EHR data into 50+ validated features including medication interactions and comorbidity scoring.",
  "Conducted comparative analysis using Scikit-learn to evaluate Logistic Regression and Random Forest baseline algorithms, identifying XGBoost as optimal solution.",
  "Developed XGBoost production model achieving 85% AUC performance, utilizing MLflow for experiment tracking across 50+ model iterations.",
  "Implemented SHAP explainability framework to generate patient-specific risk factor visualizations for clinical teams.",
  "Deployed production model to AWS SageMaker with automated GitHub Actions CI/CD pipeline, establishing monitoring for data drift detection.",
  "Implemented a hybrid inference architecture using AWS SageMaker, supporting scheduled batch inference for population-level patient risk scoring and real-time inference for time-sensitive clinical cases.",
  "Built FastAPI microservice to serve real-time risk predictions with token-based authentication and encrypted payload handling for PIPEDA compliance.",
].forEach(bullet);

doc.moveDown(0.35);
doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(ink)
  .text("AI/ML Engineer | Accenture | Mumbai, India | Permanent", {
    continued: true,
  });
doc.font("Helvetica").fillColor(muted).text("  09/2021 – 04/2023");
[
  "Supported credit risk stratification initiative for Accenture BFSI consulting practice to predict loan defaults, targeting a 20% reduction in default losses.",
  "Executed SQL queries to extract, clean, and validate loan records from legacy banking core systems.",
  "Implemented robust data cleaning pipeline using Pandas to handle missing values, outliers, and formatting inconsistencies.",
  "Created 50 domain-specific financial features using NumPy including debt-to-income ratio and credit score velocity.",
  "Utilized Scikit-learn and XGBoost for default prediction model development with MLflow experiment tracking, improving performance by 15% over logistic regression benchmarks.",
  "Executed cross-validation framework across five-fold stratified splits, achieving 74% ROC-AUC on held-out test data.",
  "Implemented SHAP explainability framework generating customer-specific risk factor visualizations for credit officers.",
  "Created FastAPI microservice containerized via Docker and deployed on Azure App Service, exposing real-time loan risk scoring endpoint with sub-100ms latency.",
  "Delivered model operationalization support through PostgreSQL database optimization, reducing credit review effort by 30%.",
].forEach(bullet);

heading("Projects");
doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(ink)
  .text("E-Commerce Support RAG Agent");
[
  "Engineered RAG-based e-commerce customer service AI agent POC using LangChain and ChromaDB, grounding responses in verified policy documents to reduce hallucinations.",
  "Implemented semantic search leveraging Hugging Face open-source embeddings to automatically surface support guidelines.",
  "Prototyped an interactive end-to-end interface using Streamlit, designing the complete POC as demo-ready for non-technical stakeholders.",
].forEach(bullet);

heading("Education");
doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(ink)
  .text(
    "Master of Applied Computing — Specialization in Artificial Intelligence",
  );
doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor(muted)
  .text("University of Windsor, Windsor, ON, Canada  |  05/2023 – 08/2024");
doc.moveDown(0.35);
doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(ink)
  .text("Bachelor of Technology in Computer Engineering");
doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor(muted)
  .text(
    "Pandit Deendayal Energy University, Gandhinagar, Gujarat, India  |  08/2018 – 05/2022",
  );

doc.end();

await new Promise((resolve, reject) => {
  stream.on("finish", resolve);
  stream.on("error", reject);
});

console.log(`Wrote ${outPath}`);
