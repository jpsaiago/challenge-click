export declare namespace User {
  interface profile {
    avatar_url: string;
    name: string | null;
    id: number;
    login: string;
    location: string | null;
    followers: number;
    public_repos: number;
    repos_url: string;
  }

  interface repo {
    name: string;
    html_url: string;
    language: string;
    description: string;
    created_at: Date;
    pushed_at: Date;
  }
}
