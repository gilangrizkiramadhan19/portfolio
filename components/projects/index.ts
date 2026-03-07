import { mobileProjects } from "./mobile-projects";
import { webProjects } from "./web-projects";
import { designProjects } from "./design-projects";
import { otherProjects } from "./other-projects";
import { Project } from "./types";

export * from "./types";
export { mobileProjects } from "./mobile-projects";
export { webProjects } from "./web-projects";
export { designProjects } from "./design-projects";
export { otherProjects } from "./other-projects";

// Combined all projects
export const allProjects: Project[] = [
  ...mobileProjects,
  ...webProjects,
  ...designProjects,
  ...otherProjects,
];
