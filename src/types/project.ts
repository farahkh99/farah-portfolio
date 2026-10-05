export type ArchitectureIcon =
  | "device"
  | "server"
  | "database"
  | "dashboard"
  | "desktop"
  | "api"
  | "plug"
  | "document";

export interface ArchitectureStep {
  title: string;
  description: string;
  icon: ArchitectureIcon;
}

export interface ProjectCaseStudy {
  problem: string;
  implementation: string;
  result: string;

  challenges?: string[];
  responsibilities?: string[];
  impact?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;

  technologies: string[];

  caseStudy?: ProjectCaseStudy;

  architecture?: ArchitectureStep[];
}