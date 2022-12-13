export declare namespace User {
  interface searchResult {
    items: {
      avatar_url: string;
      login: string;
    }[];
  }
  interface profile {
    avatar_url: string;
    name: string;
    username: string;
    location: string;
    id: number;
    followers: number;
    public_repos: number;
  }
}
