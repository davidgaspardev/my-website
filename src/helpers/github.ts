/**
 * GitHub API Client
 *
 * Fetches repository information from GitHub
 */
export type GitHubRepo = {
  name: string;
  description: string | null;
  readme: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
};

const GITHUB_API_BASE_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'davidgaspardev';

/**
 * Fetches all public repositories from a GitHub user
 *
 * @param username - GitHub username
 * @param options - Optional filters
 * @returns Array of repository information
 */
export async function getMyRepositories(
  options?: {
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    per_page?: number;
    includeReadme?: boolean;
    topics?: string[]; // Filter by topics/tags
  }
): Promise<GitHubRepo[]> {
  const {
    sort = 'updated',
    direction = 'desc',
    per_page = 100,
    includeReadme = true,
    topics = [],
  } = options || {};

  // Fetch user repositories
  const params = new URLSearchParams({
    sort,
    direction,
    per_page: per_page.toString(),
  });

  const reposResponse = await fetch(
    `${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}/repos?${params}`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    }
  );

  if (!reposResponse.ok) {
    throw new Error(`Failed to fetch repositories for user ${GITHUB_USERNAME}: ${reposResponse.statusText}`);
  }

  const reposData = await reposResponse.json();

  // Filter out forks if needed
  let filteredRepos = reposData.filter((repo: any) => !repo.fork);

  // Filter by topics if specified
  if (topics.length > 0) {
    filteredRepos = filteredRepos.filter((repo: any) => {
      const repoTopics = repo.topics || [];
      return topics.some(topic => repoTopics.includes(topic.toLowerCase()));
    });
  }

  // Optionally fetch READMEs
  if (includeReadme) {
    const reposWithReadme = await Promise.allSettled(
      filteredRepos.map(async (repo: any) => {
        let readme = '';
        try {
          const readmeResponse = await fetch(
            `${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${repo.name}/readme`,
            {
              headers: {
                'Accept': 'application/vnd.github.v3.raw',
                ...(process.env.GITHUB_TOKEN && {
                  'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
                })
              },
              next: { revalidate: 3600 }
            }
          );

          if (readmeResponse.ok) {
            readme = await readmeResponse.text();
          }
        } catch (error) {
          console.warn(`Could not fetch README for ${repo.name}:`, error);
        }

        return {
          name: repo.name,
          description: repo.description,
          readme,
          html_url: repo.html_url,
          homepage: repo.homepage,
          topics: repo.topics || [],
          stargazers_count: repo.stargazers_count,
          language: repo.language,
        };
      })
    );

    return reposWithReadme
      .filter((result): result is PromiseFulfilledResult<GitHubRepo> =>
        result.status === 'fulfilled'
      )
      .map(result => result.value);
  }

  return filteredRepos.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    readme: '',
    html_url: repo.html_url,
    homepage: repo.homepage,
    topics: repo.topics || [],
    stargazers_count: repo.stargazers_count,
    language: repo.language,
  }));
}
