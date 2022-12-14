import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext } from "react";
import { Text } from "react-native";
import { ProfileInfo } from "../../components/ProfileInfo";
import { RepoList } from "../../components/RepoList";
import { HistoryContext } from "../../contexts/historyContext";
import { UserContext } from "../../contexts/userContext";
import { ProfileView } from "./styles";

export function Profile() {
  const { profile } = useContext(UserContext);
  const { history, setHistory } = useContext(HistoryContext);

  useFocusEffect(
    useCallback(() => {
      if (!history?.some((user) => user.login == profile?.login) && profile) {
        const copy = Array.from(history);
        copy.unshift(profile);
        setHistory(copy);
      }
    }, [profile])
  );

  if (!profile) {
    // Não existe rota normal para chegar aqui sem usuário, essa é apenas uma tratativa emergencial
    return <Text>Erro ao carregar os dados do usuário</Text>;
  }

  return (
    <ProfileView>
      <ProfileInfo profile={profile} />
      <RepoList user={profile.login} />
    </ProfileView>
  );
}
