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

/**
 * Fetches repository information from GitHub
 *
 * @param owner - GitHub repository owner username
 * @param repo - Repository name
 * @returns Repository information including README
 */
export async function getGitHubRepository(
  owner: string,
  repo: string
): Promise<GitHubRepo> {
  const baseUrl = 'https://api.github.com';

  // Fetch repository information
  const repoResponse = await fetch(`${baseUrl}/repos/${owner}/${repo}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      // Add token if available (optional, increases rate limit)
      ...(process.env.GITHUB_TOKEN && {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      })
    },
    next: { revalidate: 3600 } // Cache for 1 hour
  });

  if (!repoResponse.ok) {
    throw new Error(`Failed to fetch repository: ${repoResponse.statusText}`);
  }

  const repoData = await repoResponse.json();

  // Fetch README
  let readme = '';
  try {
    const readmeResponse = await fetch(
      `${baseUrl}/repos/${owner}/${repo}/readme`,
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
    console.warn(`Could not fetch README for ${owner}/${repo}:`, error);
  }

  return {
    name: repoData.name,
    description: repoData.description,
    readme,
    html_url: repoData.html_url,
    homepage: repoData.homepage,
    topics: repoData.topics || [],
    stargazers_count: repoData.stargazers_count,
    language: repoData.language,
  };
}

/**
 * Fetches multiple repositories from GitHub
 *
 * @param repos - Array of [owner, repo] tuples
 * @returns Array of repository information
 */
export async function getGitHubRepositories(
  repos: [string, string][]
): Promise<GitHubRepo[]> {
  const promises = repos.map(([owner, repo]) =>
    getGitHubRepository(owner, repo)
  );

  return Promise.all(promises);
}

/**
 * Fetches all public repositories from a GitHub user
 *
 * @param username - GitHub username
 * @param options - Optional filters
 * @returns Array of repository information
 */
export async function getUserRepositories(
  username: string,
  options?: {
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    per_page?: number;
    includeReadme?: boolean;
    includeForks?: boolean;
  }
): Promise<GitHubRepo[]> {
  const baseUrl = 'https://api.github.com';
  const {
    sort = 'updated',
    direction = 'desc',
    per_page = 100,
    includeReadme = true,
    includeForks = false,
  } = options || {};

  // Fetch user repositories
  const params = new URLSearchParams({
    sort,
    direction,
    per_page: per_page.toString(),
  });

  const reposResponse = await fetch(
    `${baseUrl}/users/${username}/repos?${params}`,
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
    throw new Error(`Failed to fetch repositories: ${reposResponse.statusText}`);
  }

  const reposData = await reposResponse.json();

  // Filter out forks if needed
  const filteredRepos = includeForks
    ? reposData
    : reposData.filter((repo: any) => !repo.fork);

  // Optionally fetch READMEs
  if (includeReadme) {
    const reposWithReadme = await Promise.allSettled(
      filteredRepos.map(async (repo: any) => {
        let readme = '';
        try {
          const readmeResponse = await fetch(
            `${baseUrl}/repos/${username}/${repo.name}/readme`,
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

/**
 * Extracts owner and repo name from GitHub URL
 *
 * @param url - GitHub repository URL
 * @returns [owner, repo] tuple or null if invalid
 */
export function parseGitHubUrl(url: string): [string, string] | null {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) return null;

  const repo = match[2].replace(/\.git$/, '');
  return [match[1], repo];
}
