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
}