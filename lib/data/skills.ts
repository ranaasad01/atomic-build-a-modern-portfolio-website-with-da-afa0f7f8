export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 82 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Backend",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Prisma ORM", level: 83 },
      { name: "Redis", level: 75 },
      { name: "REST & GraphQL APIs", level: 90 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS / Vercel", level: 80 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "Testing (Vitest/Jest)", level: 82 },
    ],
  },
];

export const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Redis", color: "#DC382D" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Figma", color: "#F24E1E" },
];
