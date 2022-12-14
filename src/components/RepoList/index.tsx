import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { githubApi } from "../../services/githubApi";
import { User } from "../../types/user";
import { RepoCard } from "../RepoCard";
import { ListHeader } from "./styles";

interface Props {
  user: string;
}

export function RepoList({ user }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState<User.repo[]>([]);

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await githubApi.getRepos(user, page);
        /* Se a API responder, atualiza o estado global de
        usuário selecionado com o resultado */
        setIsLoading(false);
        setRepos(response);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    getRepos();
  }, []);

  if (repos) {
    return (
      <ScrollView
        contentContainerStyle={{ display: "flex", alignItems: "center" }}
      >
        <ListHeader>repositórios</ListHeader>
        {repos.map((repo, index) => (
          <RepoCard key={index} repo={repo} />
        ))}
      </ScrollView>
    );
  }

  return <></>;
}
