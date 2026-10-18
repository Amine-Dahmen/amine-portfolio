export const SITE = {
  name: 'Amine Dahmen',
  role: "IoT Master's student · Data Science · ML · Embedded",
  email: 'amyn.dahmen@gmail.com',
  github: 'https://github.com/Amine-Dahmen',
  linkedin: 'https://www.linkedin.com/in/yourusername',
  location: 'Sfax, Tunisia',
} as const

export type ProjectCategory =
  | 'all'
  | 'ai-ml'
  | 'iot'
  | 'embedded'
  | 'automation'
  | 'frontend'

export type Project = {
  id: string
  title: string
  description: string
  imageGradient: string
  cover?: string
  tags: string[]
  categories: Exclude<ProjectCategory, 'all'>[]
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    id: 'football-predictor',
    title: 'Football Match Outcome Predictor',
    description:
      'Predicts Premier League results (home win, draw, away win) as probabilities, using team form, home/away record, head-to-head stats and ELO ratings. Covers the full pipeline from data collection to evaluation, with a Streamlit interface.',
    imageGradient: 'from-violet-500/30 via-fuchsia-500/20 to-cyan-500/25',
    cover: '/covers/football.svg',
    tags: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Gradient Boosting',
      'Random Forest',
      'Logistic Regression',
      'Streamlit',
    ],
    categories: ['ai-ml'],
    githubUrl: 'https://github.com/Amine-Dahmen',
    liveUrl: 'https://github.com/Amine-Dahmen',
  },
  {
    id: 'safety-monitor',
    title: 'Industrial Safety Monitor',
    description:
      'Real-time computer vision system that detects missing protective equipment on construction sites. I fine-tuned YOLOv8 to reach 85.1% mAP50, then added webcam monitoring, automatic violation logging, a Streamlit interface and a REST API.',
    imageGradient: 'from-amber-500/20 via-orange-500/15 to-rose-500/20',
    cover: '/covers/safety-monitor.svg',
    tags: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Streamlit', 'FastAPI'],
    categories: ['ai-ml'],
    githubUrl: 'https://github.com/Amine-Dahmen',
    liveUrl: 'https://github.com/Amine-Dahmen',
  },
  {
    id: 'parking-iot',
    title: 'ParkingIoT',
    description:
      'Smart parking system built as microservices. It monitors parking spots and air quality in real time, with IoT sensors connected through MQTT, alerts handled by RabbitMQ and APIs secured behind a gateway with JWT authentication.',
    imageGradient: 'from-cyan-500/25 via-emerald-500/20 to-teal-500/25',
    cover: '/covers/parking-iot.svg',
    tags: ['C#', '.NET 8/10', 'Microservices', 'MQTT', 'RabbitMQ', 'REST API', 'JWT', 'Swagger'],
    categories: ['iot'],
    githubUrl: 'https://github.com/Amine-Dahmen',
    liveUrl: 'https://github.com/Amine-Dahmen',
  },
  {
    id: 'rfid-traceability',
    title: 'RFID Factory Traceability System',
    description:
      'Industry 4.0 prototype that uses ESP32 and PN532 RFID readers to classify products as GOOD or BAD in real time. Data goes to Firebase Realtime Database and shows up on a web dashboard for live monitoring and traceability history.',
    imageGradient: 'from-indigo-500/25 via-violet-500/20 to-slate-500/25',
    cover: '/covers/rfid-traceability.svg',
    tags: [
      'C++',
      'ESP32',
      'RFID (PN532)',
      'Firebase',
      'Wi-Fi',
      'HTML',
      'CSS',
      'JavaScript',
      'Arduino IDE',
    ],
    categories: ['embedded', 'iot'],
    githubUrl: 'https://github.com/Amine-Dahmen',
    liveUrl: 'https://github.com/Amine-Dahmen',
  },
  {
    id: 'restaurant-erp',
    title: 'Smart Restaurant IoT-Based ERP',
    description:
      'Modular ERP for restaurant management: orders, inventory, user access and sales analytics. ESP32 sensors track temperature, humidity, stock weight and door events, with automated alerts, material usage tracking, reports and role-based access control. Built during my internship at the APII Mahdia incubator.',
    imageGradient: 'from-emerald-500/25 via-cyan-500/15 to-sky-500/25',
    cover: '/covers/restaurant-erp.svg',
    tags: [
      'Python',
      'Flask',
      'MySQL',
      'SQLAlchemy',
      'ESP32',
      'REST API',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    categories: ['iot', 'embedded'],
    githubUrl: 'https://github.com/Amine-Dahmen',
    liveUrl: 'https://github.com/Amine-Dahmen',
  },
]

export const skillCategories = [
  {
    key: 'ai-ml',
    label: 'AI / ML',
    items: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'PyTorch',
      'YOLOv8',
      'OpenCV',
      'Streamlit',
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'HTML / CSS / JavaScript'],
  },
  {
    key: 'embedded',
    label: 'Embedded & IoT',
    items: ['ESP32', 'C / C++', 'Arduino IDE', 'RFID (PN532)', 'Sensors & actuators', 'VHDL'],
  },
  {
    key: 'automation',
    label: 'Automation',
    items: ['PLC (Delta, ISPSoft)', 'HMI (DOPSoft)', 'Ladder Logic', 'AutoCAD Electrical'],
  },
  {
    key: 'tools',
    label: 'Tools & Backend',
    items: [
      'Git / GitHub',
      'SQL / MySQL',
      'Flask',
      'FastAPI',
      'REST APIs',
      'MQTT',
      'RabbitMQ',
      'Firebase',
    ],
  },
] as const

export const techGrid = [
  'Python',
  'PyTorch',
  'Pandas',
  'Scikit-learn',
  'YOLOv8',
  'OpenCV',
  'ESP32',
  'MQTT',
  'Flask',
  'React',
  'TypeScript',
  'Git',
] as const

export const timeline = [
  {
    id: '1',
    period: 'Sept. 2025 – Present',
    title: "Master's in Internet of Things (IoT)",
    org: 'ISET Mahdia, Tunisia',
    detail:
      'Modules include supervised machine learning, big data and GDPR, embedded systems (ESP32/C++), software testing (BDD/Gherkin, DevOps) and advanced communication.',
  },
  {
    id: '2',
    period: 'Jan. 2026 – May 2026',
    title: 'Intern, APII Mahdia Business Incubator',
    org: 'Mahdia, Tunisia',
    detail:
      'Built a modular ERP for restaurants connected to ESP32 sensors, with real-time monitoring, automated alerts, usage tracking, reports and role-based access control.',
  },
  {
    id: '3',
    period: 'Jan. 2025 – May 2025',
    title: 'Intern, Sartex',
    org: 'Industrial company',
    detail:
      'Designed and built an automated system that recovers thermal energy from industrial processes. Wrote the control logic on a Delta PLC (ISPSoft), built the HMI screen (DOPSoft), drew the electrical diagrams in AutoCAD Electrical and connected pressure, level and temperature sensors with fault detection.',
  },
  {
    id: '4',
    period: 'Sept. 2022 – June 2025',
    title: "Bachelor's in Industrial Automation and Industrial Computing",
    org: 'ISET Mahdia, Tunisia',
    detail:
      'Final-year project: automation and supervision of a thermal energy recovery system (SARTEX).',
  },
  {
    id: '5',
    period: 'Jan. 2024 – Feb. 2024',
    title: 'Intern, SIAP Skhira',
    org: 'Skhira, Tunisia',
    detail:
      'Case study of the Foxboro 762CNA controller: how it works and how it performs. Hands-on time with industrial automation equipment.',
  },
  {
    id: '6',
    period: 'Jan. 2023 – Feb. 2023',
    title: 'Intern, STEG Mahres',
    org: 'Mahres, Tunisia',
    detail:
      'Helped analyse energy consumption data and prepare performance reports. Assisted with maintenance and diagnostics of electrical equipment, found and fixed faults.',
  },
] as const

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

export const projectFilterLabels: Record<ProjectCategory, string> = {
  all: 'All',
  'ai-ml': 'AI / ML',
  iot: 'IoT',
  embedded: 'Embedded',
  automation: 'Automation',
  frontend: 'Frontend',
}