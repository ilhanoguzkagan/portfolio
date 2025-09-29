import { Target, ShieldCheck, Code, GraduationCap } from "lucide-react";

export const workExperience = [
  {
    startYear: "Mar 2024",
    endYear: "Present",
    role: "Product Analyst",
    company: "Self-Managed E-Commerce Business (Amazon FBA) · Freelance",
    description: "- Conduct comprehensive market and competitor analysis to identify profitable product opportunities from concept to launch.\n- Analyse sales performance, pricing elasticity, and customer feedback with Excel and SQL to surface growth drivers and inform lifecycle decisions.\n- Optimise digital advertising campaigns and conversion funnels, boosting visibility and improving conversion rates.\n- Apply data-driven demand forecasts to align inventory turnover with profitability targets across the supply chain.",
    tech: ["Market Analysis", "Excel", "SQL", "Digital Advertising", "Supply Chain"],
  },
  {
    startYear: "Sep 2023",
    endYear: "Sep 2025",
    role: "Warehouse Associate",
    company: "Musgrave Group",
    description: "- Operate advanced voice-picking technology within a high-volume chilled warehouse, consistently meeting and exceeding order accuracy targets.\n- Support supply chain continuity by assembling products with precision and ensuring on-time fulfilment for retail partners.",
    tech: ["Voice-picking", "Supply Chain", "Inventory Management"],
  },
  {
    startYear: "Feb 2023",
    endYear: "Jun 2023",
    role: "Customer Quality Engineer - Quality Assurance",
    company: "Eczacibasi Building Materials",
    description: "- Manage and resolve technical customer complaints within an SAP-based portal while maintaining strict quality standards.\n- Automate OEM performance reports using Excel Macros, saving roughly two hours of manual effort per week.\n- Deliver actionable feedback to production teams through detailed analysis that prevents issue recurrence.",
    tech: ["SAP", "Excel Macros", "Customer Feedback", "Quality Standards"],
  },
  {
    startYear: "Jan 2021",
    endYear: "Jan 2023",
    role: "Quality Improvement & Customer Quality Supervisor",
    company: "Sampa Automotive Industry & Commerce",
    description: "- Lead a team of six engineers on quality initiatives, reducing critical customer complaints by 9% in 12 months.\n- Build automated KPI dashboards with Power BI and Excel to give leadership real-time visibility into quality metrics.\n- Redesign the B2B complaints portal, eliminating duplicate data and lifting operational efficiency by 17%.\n- Own the end-to-end CAPA process for B2B complaints, strengthening key customer relationships.",
    tech: ["Power BI", "Excel", "CAPA", "Team Leadership"],
  },
  {
    startYear: "Mar 2019",
    endYear: "Jan 2021",
    role: "Quality Improvement & Customer Quality Engineer",
    company: "Sampa Automotive Industry & Commerce",
    description: "- Perform root cause analysis on recurring defects using 5WHY and Ishikawa techniques to drive sustainable corrective actions.\n- Apply the 8D methodology to resolve complex customer issues, enhancing product reliability and satisfaction.\n- Utilise SAP for stock control, workflow monitoring, and technical drawing reviews to uphold production quality.",
    tech: ["5WHY", "Ishikawa", "8D", "SAP"],
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
    description: "Comprehensive training in data cleaning, analysis, and visualization techniques using industry-standard tools.",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
    icon: <Target size={24} />,
    verifyLink: "https://coursera.org/share/5c66f2c4bb4c8ad39166235fdbe35ff2"
  },
  {
    name: "Process Failure Mode and Effects Analysis (PFMEA)",
    provider: "Quality Management Institute",
    year: "2023",
    description: "Advanced certification in systematic methodology for evaluating processes and identifying potential failure modes.",
    skills: ["Risk Assessment", "Process Analysis", "Quality Control"],
    icon: <ShieldCheck size={24} />,
    verifyLink: ""
  },
  {
    name: "Bootcamp Accelerator Program (Python)",
    provider: "Patika.dev",
    year: "2023",
    description: "Intensive programming bootcamp covering Python fundamentals, data structures, and practical application development.",
    skills: ["Python", "Data Structures", "Programming"],
    icon: <Code size={24} />,
    verifyLink: "https://academy.patika.dev/certificates/3b24b78c"
  },
  {
    name: "Programming Methodologies",
    provider: "Stanford University",
    year: "2023",
    description: "Foundational course in programming logic, structured thinking, and software development methodologies.",
    skills: ["Programming Logic", "Software Design", "Problem Solving"],
    icon: <GraduationCap size={24} />,
    verifyLink: "https://codeinplace.stanford.edu/cip3/certificate/s980xm"
  }
];

export const socialLinks = [
  { name: "GitHub", handle: "@ilhanoguzkagan", url: "https://github.com/ilhanoguzkagan" },
  { name: "LinkedIn", handle: "oguzkagan ilhan", url: "https://www.linkedin.com/in/oguzkagan-ilhan-29620085/" },
  { name: "Email", handle: "Contact via email", url: "mailto:oguzkaganilhan@gmail.com" },
  { name: "Phone", handle: "Call me", url: "tel:+353830160611" },
];
