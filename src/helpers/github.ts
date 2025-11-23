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
