import { getProjects } from "@/src/helpers/data/projects";
import ProjectCard from "./components/ProjectCard";

export default async function ProjectsPage() {
  // Filter by 'cli' topic/tag - add more topics in the array as needed
  const projects = await getProjects(['cli']);

  return (
    <div className="pt-[85px] flex flex-row flex-wrap gap-2 justify-center">
      {projects.map((project) => (
        <ProjectCard key={project.link} data={project} />
      ))}
    </div>
  );
}
