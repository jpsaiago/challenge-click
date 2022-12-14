import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { githubApi } from "../../services/githubApi";
import { User } from "../../types/user";
import { RepoCard } from "../RepoCard";
import { ErrorMessage, ListFooter, ListHeader } from "./styles";

interface Props {
  user: string;
}

export function RepoList({ user }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState<User.repo[]>([]);

  useEffect(() => {
    getRepos();
  }, []);

  async function getRepos() {
    if (isDone) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await githubApi.getRepos(user, page);
      //Se a Api não tiver mais nenhum repo pra entregar, paramos as requisições
      setIsLoading(false);
      if (response.length == 0) {
        return setIsDone(true);
      }
      /* Se a API responder com dados, atualiza o estado global de
      usuário selecionado com o resultado */
      setRepos(repos.concat(response));
      setPage(page + 1);
    } catch (e) {
      if (e instanceof Error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
  }

  if (isError) {
    return (
      <ErrorMessage>
        ✖ Não foi possível recuperar os repositórios desse usuário
      </ErrorMessage>
    );
  }

  if (repos) {
    return (
      <View style={{ flex: 1 }}>
        <ListHeader>repositórios</ListHeader>
        <FlatList
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
          }}
          data={repos}
          renderItem={({ item, index }) => <RepoCard key={index} repo={item} />}
          onEndReached={() => getRepos()}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            isLoading ? (
              <ListFooter>
                <ActivityIndicator />
              </ListFooter>
            ) : (
              <></>
            )
          }
        />
      </View>
    );
  }

  return <></>;
}
