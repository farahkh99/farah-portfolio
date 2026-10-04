export type ArchitectureIcon =
  | "device"
  | "server"
  | "database"
  | "dashboard";

export interface ArchitectureStep {
  title: string;
  description: string;
  icon: ArchitectureIcon;
}
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  caseStudy?: {
  problem: string;
  implementation: string;
  result: string;
};
architecture?: ArchitectureStep[];
}