import type { IconType } from "react-icons";
import {
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiDatabricks,
  SiDjango,
  SiDocker,
  SiElasticsearch,
  SiFastapi,
  SiGithub,
  SiGithubactions,
  SiGnubash,
  SiGooglegemini,
  SiHuggingface,
  SiKeras,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import {
  HiOutlineAcademicCap,
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiOutlineCog6Tooth,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlinePhone,
  HiOutlineSparkles,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import {
  FaAws,
  FaChartBar,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaMicrosoft,
  FaRobot,
} from "react-icons/fa6";

export type BrandIcon = {
  Icon: IconType;
  color: string;
};

const skillIconMap: Record<string, BrandIcon> = {
  Python: { Icon: SiPython, color: "#3776AB" },
  SQL: { Icon: HiOutlineCommandLine, color: "#F59E0B" },
  Bash: { Icon: SiGnubash, color: "#4EAA25" },
  Pandas: { Icon: SiPandas, color: "#150458" },
  NumPy: { Icon: SiNumpy, color: "#013243" },
  Matplotlib: { Icon: FaChartBar, color: "#11557C" },
  Seaborn: { Icon: FaChartBar, color: "#4C72B0" },
  Plotly: { Icon: SiPlotly, color: "#3F4F75" },
  "Power BI": { Icon: FaChartBar, color: "#F2C811" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  Keras: { Icon: SiKeras, color: "#D00000" },
  "Scikit-learn": { Icon: SiScikitlearn, color: "#F7931E" },
  XGBoost: { Icon: HiOutlineCpuChip, color: "#FF6B35" },
  "Hugging Face Transformers": { Icon: SiHuggingface, color: "#FFD21E" },
  YOLOv8: { Icon: HiOutlineEye, color: "#00A6ED" },
  "Object Detection": { Icon: HiOutlineEye, color: "#0EA5E9" },
  "Object Tracking": { Icon: HiOutlineEye, color: "#0284C7" },
  Roboflow: { Icon: HiOutlineSparkles, color: "#7C3AED" },
  "GPT-4": { Icon: FaRobot, color: "#10A37F" },
  LLaMA: { Icon: FaRobot, color: "#0668E1" },
  BERT: { Icon: SiHuggingface, color: "#FFD21E" },
  RAG: { Icon: HiOutlineSquare3Stack3D, color: "#FF3D00" },
  "Prompt Engineering": { Icon: SiGooglegemini, color: "#4285F4" },
  "Agentic AI": { Icon: FaRobot, color: "#FF5A1F" },
  LangChain: { Icon: HiOutlineSparkles, color: "#1C3C3C" },
  LangGraph: { Icon: HiOutlineSparkles, color: "#00BFA6" },
  Pinecone: { Icon: FaDatabase, color: "#111827" },
  FAISS: { Icon: FaDatabase, color: "#0066FF" },
  "Chroma DB": { Icon: FaDatabase, color: "#FF3D00" },
  "Vector Databases": { Icon: FaDatabase, color: "#0EA5E9" },
  MLflow: { Icon: HiOutlineCog6Tooth, color: "#0194E2" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  "CI/CD": { Icon: SiGithubactions, color: "#16A34A" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  Django: { Icon: SiDjango, color: "#092E20" },
  "AWS SageMaker": { Icon: FaAws, color: "#FF9900" },
  "AWS Lambda": { Icon: FaAws, color: "#FF9900" },
  "AWS EC2": { Icon: FaAws, color: "#FF9900" },
  "Azure ML Studio": { Icon: FaMicrosoft, color: "#0078D4" },
  Databricks: { Icon: SiDatabricks, color: "#FF3621" },
  "Apache Spark": { Icon: SiApachespark, color: "#E25A1C" },
  PySpark: { Icon: SiApachespark, color: "#E25A1C" },
  Kafka: { Icon: SiApachekafka, color: "#231F20" },
  Airflow: { Icon: SiApacheairflow, color: "#017CEE" },
  "Feature Engineering": { Icon: HiOutlineCpuChip, color: "#FF5A1F" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  "SQL Server": { Icon: FaMicrosoft, color: "#CC2927" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Elasticsearch: { Icon: SiElasticsearch, color: "#005571" },
  SHAP: { Icon: HiOutlineCpuChip, color: "#0066FF" },
  "ROC-AUC": { Icon: FaChartBar, color: "#FF3D00" },
  "F1 Score": { Icon: FaChartBar, color: "#00BFA6" },
  Precision: { Icon: FaChartBar, color: "#F59E0B" },
  Recall: { Icon: FaChartBar, color: "#EF4444" },
  "Cross-Validation": { Icon: HiOutlineCog6Tooth, color: "#2563EB" },
};

const categoryIconMap: Record<string, BrandIcon> = {
  Languages: { Icon: HiOutlineCodeBracket, color: "#0066FF" },
  "Data Analytics": { Icon: FaChartBar, color: "#FF5A1F" },
  Data: { Icon: FaDatabase, color: "#4169E1" },
  "ML & Deep Learning": { Icon: SiPytorch, color: "#EE4C2C" },
  "Computer Vision": { Icon: HiOutlineEye, color: "#00A6ED" },
  "Generative AI": { Icon: FaRobot, color: "#10A37F" },
  "Generative AI & NLP": { Icon: FaRobot, color: "#10A37F" },
  "LLM Ops & Tooling": { Icon: HiOutlineSparkles, color: "#FF3D00" },
  "MLOps & Cloud": { Icon: SiDocker, color: "#2496ED" },
  "MLOps & Deployment": { Icon: SiDocker, color: "#2496ED" },
  Cloud: { Icon: HiOutlineCloud, color: "#FF9900" },
  "Big Data & Pipelines": { Icon: SiApachespark, color: "#E25A1C" },
  Databases: { Icon: FaDatabase, color: "#4169E1" },
  "Model Evaluation": { Icon: FaChartBar, color: "#00BFA6" },
};

export function getSkillIcon(name: string): BrandIcon {
  return skillIconMap[name] ?? { Icon: HiOutlineCpuChip, color: "#0066FF" };
}

export function getCategoryIcon(name: string): BrandIcon {
  return categoryIconMap[name] ?? { Icon: HiOutlineCpuChip, color: "#0066FF" };
}

export const socialIcons = {
  email: { Icon: HiOutlineEnvelope, color: "#FF3D00", label: "Email" },
  phone: { Icon: HiOutlinePhone, color: "#00BFA6", label: "Phone" },
  linkedin: { Icon: FaLinkedin, color: "#0A66C2", label: "LinkedIn" },
  github: { Icon: FaGithub, color: "#8B949E", label: "GitHub" },
  oracle: { Icon: FaDatabase, color: "#C74634", label: "Oracle" },
  accenture: { Icon: FaMicrosoft, color: "#A100FF", label: "Accenture" },
  education: {
    Icon: HiOutlineAcademicCap,
    color: "#0066FF",
    label: "Education",
  },
} as const;

export function getLanguageIcon(language: string | null): BrandIcon {
  if (!language) return { Icon: SiGithub, color: "#6B7280" };

  const map: Record<string, BrandIcon> = {
    Python: { Icon: SiPython, color: "#3776AB" },
    "Jupyter Notebook": { Icon: SiPython, color: "#F37626" },
    HTML: { Icon: HiOutlineCodeBracket, color: "#E34F26" },
    Dart: { Icon: HiOutlineCodeBracket, color: "#0175C2" },
    PHP: { Icon: HiOutlineCodeBracket, color: "#777BB4" },
    TypeScript: { Icon: HiOutlineCodeBracket, color: "#3178C6" },
    JavaScript: { Icon: HiOutlineCodeBracket, color: "#F7DF1E" },
  };

  return map[language] ?? { Icon: HiOutlineCodeBracket, color: "#0066FF" };
}
