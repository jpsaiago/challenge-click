import axios from "axios";
import { User } from "../types/user";

const requester = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 10000,
});

async function searchUser(query: string) {
  const response = await requester.get<User.profile>(`/users/${query}`);
  return response.data;
}

async function getRepos(query: string, page: number) {
  const response = await requester.get<User.repo[]>(`/users/${query}/repos`, {
    params: {
      page: page,
    },
  });
  return response.data;
}

export const githubApi = {
  searchUser,
  getRepos,
};
