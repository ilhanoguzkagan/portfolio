import { Target, ShieldCheck, Code, GraduationCap } from "lucide-react";


export const workExperience = [
  {
    startYear: "Mar 2024",
    endYear: "Present",
    role: "Product Analyst",
    company: "Self-Managed E-Commerce Business (Amazon FBA) · Freelance",
    description: "● Market Analysis: Conducted competitor and market research to identify profitable opportunities and define product strategies.\n● Data Analysis: Utilized Excel to analyze sales performance, pricing elasticity, and customer feedback for data-driven decisions.\n● Marketing Optimization: Monitored digital advertising campaigns and conversion funnels to improve ROI and product visibility.\n● Supply Chain: Managed inventory turnover and demand forecasting to optimize stock levels and profitability.",
    tech: ["Market Analysis", "Data Analysis", "Marketing Optimization", "Supply Chain"],
  },
  {
    startYear: "Sep 2023",
    endYear: "Sep 2025",
    role: "Warehouse Associate",
    company: "Musgrave Group",
    description: "● Operational Discipline: Utilized advanced voice-picking technology to ensure high-volume order accuracy and efficiency within a fast-paced supply chain environment.\n● Local Integration: Gained hands-on experience in the Irish logistics sector, maintaining consistent performance targets and workplace safety standards.",
    tech: ["Operational Discipline", "Local Integration"],
  },
  {
    startYear: "Feb 2023",
    endYear: "Jun 2023",
    role: "Customer Quality Engineer - Quality Assurance",
    company: "Eczacibasi Building Materials",
    description: "● Complaint Resolution: Managed and resolved technical customer complaints via an SAP-based portal, ensuring strict adherence to global quality standards.\n● Process Automation: Automated OEM performance reporting using Excel Macros, reducing manual workload by approximately 2 hours per week.\n● Continuous Improvement: Performed detailed analysis of customer issues and provided actionable feedback to production teams to prevent recurrence.",
    tech: ["Complaint Resolution", "Process Automation", "Continuous Improvement"],
  },
  {
    startYear: "Jan 2021",
    endYear: "Jan 2023",
    role: "Quality Improvement & Customer Quality Supervisor",
    company: "Sampa Automotive Industry & Commerce",
    description: "● Team Leadership: Led a team of 6 engineers in quality improvement projects, achieving a 9% reduction in critical customer complaints over 12 months.\n● Data Automation: Engineered and automated KPI dashboards using Power BI and Excel, providing senior management with real-time visibility into quality metrics.\n● Process Optimization: Redesigned the B2B customer complaints portal, eliminating data duplication and increasing operational efficiency by 17%.\n● CAPA Management: Owned the end-to-end Corrective and Preventive Action (CAPA) process, ensuring timely resolution and strengthening key B2B relationships.",
    tech: ["Team Leadership", "Data Automation", "Process Optimization", "CAPA Management"],
  },
  {
    startYear: "Mar 2019",
    endYear: "Jan 2021",
    role: "Quality Improvement & Customer Quality Engineer",
    company: "Sampa Automotive Industry & Commerce",
    description: "● Problem Solving: Conducted root cause analysis on recurring defects using 5WHY and Ishikawa diagrams to drive sustainable corrective actions.\n● Systems & Quality: Utilized SAP for stock control management, workflow monitoring, and technical drawing reviews to ensure manufacturing quality.\n● 8D Methodology: Applied the 8D methodology to resolve complex product defects.",
    tech: ["Problem Solving", "Systems & Quality", "8D Methodology"],
  },
];

export const personalProjects = [
  {
    title: "AI-Assisted Portfolio Website Development",
    description: "Leveraged AI code generation tools (ChatGPT, Claude) to build and deploy a fully functional personal portfolio website without prior hands-on web development experience. Managed the entire process from prompt engineering for UI/UX design and functionality to final implementation, demonstrating an ability to rapidly learn and apply new technologies to achieve specific goals.",
    tech: ["AI Code Generation", "Prompt Engineering", "Next.js", "React", "Tailwind CSS"],
    link: "https://oguzkagan.vercel.app",
  },
  {
    title: "AI-Enhanced Data Handling & Automation",
    description: "Utilized AI assistants to write and debug Python scripts for fetching, parsing, and cleaning data from public APIs, significantly accelerating the data retrieval process. Applied AI tools to streamline the use of command-line interfaces (CLIs) for various technical tasks, improving workflow efficiency and reducing manual processing time.",
    tech: ["Python Scripting", "API Integration", "Data Processing", "CLI Automation", "AI-Assisted Development"],
    link: "",
  },
];

export const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    provider: "Google",
    year: "2024",
    description: "Focused on SQL, R, Tableau, and data cleaning processes.",
    skills: ["SQL", "R", "Tableau", "Data Cleaning"],
    icon: <Target size={24} />,
    verifyLink: "https://coursera.org/share/5c66f2c4bb4c8ad39166235fdbe35ff2"
  },
  {
    name: "Programming Methodologies",
    provider: "Stanford University",
    year: "2023",
    description: "Foundational course in programming logic, structured thinking, and software development methodologies.",
    skills: ["Programming Logic", "Software Design", "Problem Solving"],
    icon: <GraduationCap size={24} />,
    verifyLink: "https://codeinplace.stanford.edu/cip3/certificate/s980xm"
  },
  {
    name: "Python Bootcamp Accelerator Program",
    provider: "Patika.dev",
    year: "2023",
    description: "Intensive programming bootcamp covering Python fundamentals, data structures, and practical application development.",
    skills: ["Python", "Data Structures", "Programming"],
    icon: <Code size={24} />,
    verifyLink: "https://academy.patika.dev/certificates/3b24b78c"
  }
];

export const socialLinks = [
  { name: "GitHub", handle: "@ilhanoguzkagan", url: "https://github.com/ilhanoguzkagan" },
  { name: "LinkedIn", handle: "oguzkagan ilhan", url: "https://www.linkedin.com/in/oguzkagan-ilhan-29620085/" },
  { name: "Email", handle: "oguzkaganilhan@gmail.com", url: "mailto:oguzkaganilhan@gmail.com" },
  { name: "Phone", handle: "(+353)83 016 06 11", url: "tel:+353830160611" },
];
