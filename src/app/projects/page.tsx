import { getProjects } from "@/src/helpers/data/projects";
import ProjectCard from "./components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="pt-[75px]">
      {projects.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
  );
}
