import { Target, ShieldCheck, Code, GraduationCap } from "lucide-react";

export const workExperience = [
  {
    startYear: "2024",
    endYear: "Still",
    role: "Entrepreneur",
    company: "Self-Managed E-Commerce Business - USA Market",
    description: "- Launched and scaled an Amazon FBA business, managing all operational facets including product sourcing, inventory optimisation, and order fulfilment.\n- Analyse sales performance, pricing strategies, and customer feedback using Amazon Seller Central and Excel to identify growth opportunities and maximise revenue.\n- Develop and execute digital advertising campaigns, resulting in increased product visibility and a consistent rise in sales metrics.\n- Implement streamlined inventory management processes to minimise stockouts and reduce holding costs, directly improving profitability.",
    tech: ["Amazon FBA", "Excel", "Digital Advertising", "Inventory Management"],
  },
  {
    startYear: "2022",
    endYear: "Still",
    role: "Warehouse Associate",
    company: "Musgrave Group - Cork, Ireland",
    description: "- Operate advanced voice-picking technology within a high-volume chilled warehouse, consistently meeting and exceeding targets for order accuracy and efficiency.\n- Contribute to supply chain continuity by ensuring precise and timely assembly of products for order fulfilment.",
    tech: ["Voice-picking", "Supply Chain", "Inventory Management"],
  },
  {
    startYear: "2022",
    endYear: "2022",
    role: "Technical Customer Services Engineer",
    company: "Eczacibasi Building Materials - Eskisehir, Turkey",
    description: "- Managed and resolved technical customer complaints via an SAP-based portal, ensuring adherence to strict quality standards.\n- Automated the generation of performance reports for OEM customers using Excel Macros, saving approximately 2 hours of manual work per week.\n- Performed detailed analysis of customer issues and provided actionable feedback to production teams to prevent recurrence.",
    tech: ["SAP", "Excel Macros", "Customer Service", "Quality Standards"],
  },
  {
    startYear: "2021",
    endYear: "2022",
    role: "Quality Improvement & Customer Quality Supervisor",
    company: "Sampa Automotive Industry & Commerce - Samsun, Turkey",
    description: "- Led a team of 6 engineers in executing quality improvement projects, successfully reducing critical customer complaints by 9% over 12 months.\n- Engineered and automated KPI dashboards using Power BI and Excel, providing senior management with real-time visibility into quality metrics and complaint resolution times.\n- Drove a project to redesign the B2B customer complaints portal, which eliminated data duplication and increased the team's operational efficiency by 17%.\n- Owned the end-to-end CAPA process for all B2B complaints, ensuring timely resolution and strengthening key customer relationships.",
    tech: ["Power BI", "Excel", "CAPA", "Team Leadership"],
  },
  {
    startYear: "2019",
    endYear: "2021",
    role: "Quality Improvement & Customer Quality Engineer",
    company: "Sampa Automotive Industry & Commerce - Samsun, Turkey",
    description: "- Conducted in-depth root cause analyses on recurring product defects using 5WHY and Ishikawa diagrams, leading to sustainable corrective actions.\n- Applied the 8D problem-solving methodology to systematically resolve complex customer issues, enhancing product reliability and customer satisfaction.\n- Utilised SAP for stock control management, workflow monitoring of semi-finished goods, and technical drawing reviews to ensure production quality.",
    tech: ["5WHY", "Ishikawa", "8D", "SAP"],
  },
];

export const personalProjects = [
  {
    title: "Personal Portfolio Website",
    description: "A minimalist and responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dynamic liquid cursor, smooth scrolling, and a theme switcher. The design is clean and modern, focusing on a great user experience.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://oguzkagan.vercel.app/",
  },
  {
    title: "CoreData To-Do App",
    description: "A native iOS to-do list application developed with Swift and SwiftUI. Utilizes CoreData for persistent local storage, allowing users to create, manage, and track their tasks efficiently. The app features a clean, intuitive user interface that follows Apple's Human Interface Guidelines.",
    tech: ["Swift", "SwiftUI", "CoreData", "Xcode"],
    link: "",
  },
  {
    title: "Automated Video Creator",
    description: "A Python-based application that automates the creation of short-form videos. The script fetches trending topics, generates a script using an AI API, synthesizes voice-overs, and combines stock footage to produce engaging videos for social media platforms.",
    tech: ["Python", "MoviePy", "OpenAI API", "ElevenLabs API"],
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