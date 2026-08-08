import { ProjectInfo } from "../types";
import { getMyRepositories } from "../github";

/**
 * Fetches all projects from GitHub
 *
 * @param filterTopics - Optional array of topics to filter by (e.g., ['cli', 'web'])
 * @returns Array of projects from GitHub
 */
export async function getProjects(filterTopics?: string[]): Promise<ProjectInfo[]> {
  try {
    const githubRepos = await getMyRepositories({
      sort: 'updated',
      direction: 'desc',
      includeReadme: true,
      topics: filterTopics, // Filter by topics/tags
    });

    // Convert GitHub repos to ProjectInfo format
    const projects: ProjectInfo[] = githubRepos.map((repo) => ({
      name: repo.name,
      description: repo.description || 'No description available',
      link: repo.html_url,
      readme: repo.readme,
      topics: repo.topics,
      stars: repo.stargazers_count,
      language: repo.language || undefined,
      homepage: repo.homepage || undefined,
    }));

    return projects;
  } catch (error) {
    console.error('Failed to fetch GitHub repositories:', error);
    // Return empty array if fetch fails
    return [];
  }
}
