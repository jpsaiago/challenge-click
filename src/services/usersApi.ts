import axios from "axios";
import { User } from "../types/user";

const requester = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 10000,
});

async function search(query: string) {
  const response = await requester.get<User.searchResult>("search/users", {
    params: {
      q: query,
    },
  });
  return response.data.items;
}

export const userApi = {
  search,
};
