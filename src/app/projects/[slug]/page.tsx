
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/data/projects";
import ProjectDetails from "@/components/projects/ProjectDetails";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
