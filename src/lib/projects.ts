import { profile } from "@/content/profile";
import { fetchAllRepos, type GitHubRepo } from "@/lib/github";

export type DisplayProject = {
  id: string;
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stack: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string | null;
  featured: boolean;
};

function fromFeatured(
  item: (typeof profile.featuredProjects)[number],
  repo?: GitHubRepo,
): DisplayProject {
  return {
    id: item.repo ? `featured-${item.repo}` : `featured-${item.name}`,
    name: item.name,
    description: item.description,
    url: repo?.html_url ?? item.url,
    homepage: item.homepage ?? repo?.homepage ?? null,
    language: repo?.language ?? item.stack[0] ?? null,
    stack: item.stack,
    stargazers_count: repo?.stargazers_count ?? 0,
    forks_count: repo?.forks_count ?? 0,
    updated_at: repo?.updated_at ?? null,
    featured: true,
  };
}

function fromRepo(repo: GitHubRepo): DisplayProject {
  return {
    id: `repo-${repo.id}`,
    name: repo.name,
    description: repo.description ?? "No description provided.",
    url: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
    stack: repo.topics?.slice(0, 4) ?? [],
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    updated_at: repo.updated_at,
    featured: false,
  };
}

export async function getDisplayProjects(): Promise<{
  projects: DisplayProject[];
  error: string | null;
}> {
  const limit = profile.projectsLimit ?? 4;
  const featured = profile.featuredProjects ?? [];
  const { repos, error } = await fetchAllRepos();

  const byName = new Map(repos.map((repo) => [repo.name.toLowerCase(), repo]));
  const used = new Set<string>();

  const projects: DisplayProject[] = featured.slice(0, limit).map((item) => {
    const repo = item.repo ? byName.get(item.repo.toLowerCase()) : undefined;
    if (repo) used.add(repo.name.toLowerCase());
    return fromFeatured(item, repo);
  });

  if (projects.length < limit) {
    for (const repo of repos) {
      if (projects.length >= limit) break;
      const key = repo.name.toLowerCase();
      if (used.has(key)) continue;
      used.add(key);
      projects.push(fromRepo(repo));
    }
  }

  return { projects, error };
}
