export const SITE = {
  name: 'Amine Dahmen',
  role: 'Engineering student · ML · Embedded · Automation',
  email: 'amine.dahmen@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourusername',
  location: 'Open to opportunities',
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
  tags: string[]
  categories: Exclude<ProjectCategory, 'all'>[]
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    id: 'football-ai',
    title: 'Football Match Prediction AI',
    description:
      'End-to-end ML pipeline for match outcomes using feature engineering, PyTorch models, and evaluation tuned for real-world football statistics.',
    imageGradient: 'from-violet-500/30 via-fuchsia-500/20 to-cyan-500/25',
    tags: ['Python', 'PyTorch', 'Pandas', 'Scikit-learn'],
    categories: ['ai-ml'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    id: 'water-iot',
    title: 'IoT Water Recovery Automation',
    description:
      'Sensor-driven recovery system with edge logic, telemetry dashboards, and automated control loops for sustainable water management.',
    imageGradient: 'from-cyan-500/25 via-emerald-500/20 to-teal-500/25',
    tags: ['IoT', 'Arduino', 'Python', 'MQTT'],
    categories: ['iot', 'automation'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    id: 'hmi-dashboard',
    title: 'Industrial HMI Dashboard',
    description:
      'Operator-focused visualization layer for PLC-backed processes—clear alarms, trends, and KPIs for the plant floor.',
    imageGradient: 'from-amber-500/20 via-orange-500/15 to-rose-500/20',
    tags: ['PLC/HMI', 'SCADA', 'Industrial UI'],
    categories: ['automation', 'frontend'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    id: 'embedded-lab',
    title: 'Embedded Systems Lab',
    description:
      'Collection of firmware experiments: real-time sensing, actuation, and low-level interfaces bridging hardware to higher-level analytics.',
    imageGradient: 'from-indigo-500/25 via-violet-500/20 to-slate-500/25',
    tags: ['Arduino', 'C/C++', 'Sensors'],
    categories: ['embedded', 'iot'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
]

export const skillCategories = [
  {
    key: 'ai-ml',
    label: 'AI / ML',
    items: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Experiment tracking'],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UI systems'],
  },
  {
    key: 'embedded',
    label: 'Embedded',
    items: ['Arduino', 'Firmware patterns', 'Sensors & actuators', 'Real-time I/O'],
  },
  {
    key: 'automation',
    label: 'Automation',
    items: ['PLC / HMI', 'Industrial networks', 'Process visualization'],
  },
  {
    key: 'tools',
    label: 'Tools',
    items: ['Git / GitHub', 'Linux', 'Data pipelines', 'APIs'],
  },
] as const

export const techGrid = [
  'Python',
  'PyTorch',
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'Arduino',
  'PLC/HMI',
  'Git',
  'GitHub',
  'React',
  'TypeScript',
  'Tailwind',
] as const

export const timeline = [
  {
    id: '1',
    period: 'Present',
    title: 'Engineering studies',
    org: 'University program',
    detail:
      'Focus on machine learning, AI systems, embedded platforms, and industrial automation—with hands-on projects spanning software and hardware.',
  },
  {
    id: '2',
    period: 'Ongoing',
    title: 'AI / ML project work',
    org: 'Independent & academic',
    detail:
      'Building predictive models and data workflows; currently emphasizing football analytics and robust evaluation practices.',
  },
  {
    id: '3',
    period: 'Ongoing',
    title: 'Embedded & IoT builds',
    org: 'Lab & prototyping',
    detail:
      'Rapid iteration on sensors, control logic, and telemetry—bridging edge devices with higher-level analytics.',
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
