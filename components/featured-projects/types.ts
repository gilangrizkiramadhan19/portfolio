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
