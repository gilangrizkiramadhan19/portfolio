export interface AppScreen {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  screens?: AppScreen[];
  category: "mobile" | "web" | "design" | "other";
}

export const filterCategories = [
  { id: "all", label: "Semua" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
  { id: "other", label: "Other" },
] as const;

export type FilterCategory = typeof filterCategories[number]["id"];
