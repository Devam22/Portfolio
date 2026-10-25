import { profile } from "@/content/profile";

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
  homepage: string | null;
};

export type GitHubFetchResult = {
  repos: GitHubRepo[];
  error: string | null;
};

export async function fetchAllRepos(): Promise<GitHubFetchResult> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "devam-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const username = profile.githubUsername;

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return {
        repos: [],
        error: `GitHub API returned ${response.status}`,
      };
    }

    const data = (await response.json()) as GitHubRepo[];

    const repos = data
      .filter((repo) => !repo.fork && !repo.archived)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        topics: repo.topics ?? [],
        fork: repo.fork,
        archived: repo.archived,
        homepage: repo.homepage,
      }));

    return { repos, error: null };
  } catch {
    return {
      repos: [],
      error: "Unable to reach GitHub. Projects will sync on the next refresh.",
    };
  }
}

export function formatRelativeDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}
