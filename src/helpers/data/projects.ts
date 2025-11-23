import { ProjectInfo } from "../types";
import { getGitHubRepository, parseGitHubUrl } from "../github";

export const projectsData: ProjectInfo[] = [
  {
    name: "DroiDPI",
    description: "A CLI tool to automatically generate multi-density icons for Flutter and Android apps, supporting both mipmap and drawable outputs.",
    link: "https://github.com/davidgaspardev/droidpi",
  },
];

/**
 * Fetches project information from GitHub and merges with static data
 *
 * @returns Array of projects with GitHub data
 */
export async function getProjects(): Promise<ProjectInfo[]> {
  const projectsWithGitHub = await Promise.all(
    projectsData.map(async (project) => {
      // Parse GitHub URL
      const parsed = parseGitHubUrl(project.link);

      if (!parsed) {
        // Return project as-is if not a GitHub URL
        return project;
      }

      try {
        const [owner, repo] = parsed;
        const githubData = await getGitHubRepository(owner, repo);

        // Merge GitHub data with static data
        return {
          ...project,
          name: githubData.name,
          description: githubData.description || project.description,
          readme: githubData.readme,
          topics: githubData.topics,
          stars: githubData.stargazers_count,
          language: githubData.language || undefined,
          homepage: githubData.homepage || undefined,
        } as ProjectInfo;
      } catch (error) {
        console.error(`Failed to fetch GitHub data for ${project.link}:`, error);
        // Return original project if GitHub fetch fails
        return project;
      }
    })
  );

  return projectsWithGitHub;
}

// Keep static export for backward compatibility
export const projects = projectsData;
