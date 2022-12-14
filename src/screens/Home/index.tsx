import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { StatusBar, Text } from "react-native";
import Logo from "../../../assets/svgs/logoHubusca.svg";
import SearchHistory from "../../components/SearchHistory";
import { SearchInput } from "../../components/SearchInput";
import { SearchResult } from "../../components/SearchResult";
import { UserContext } from "../../contexts/userContext";
import { useDebounce } from "../../hooks/useDebounce";
import { StackParamList } from "../../Routes";
import { githubApi } from "../../services/githubApi";
import {
  EmptyResults,
  HistoryTitle,
  HomeContainer,
  LogoContainer,
  LogoText,
} from "./styles";

type HomeNavigationProp = NativeStackNavigationProp<StackParamList, "Home">;

export function Home() {
  const navigation = useNavigation<HomeNavigationProp>();
  const { profile, setProfile } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const queryUsers = useDebounce(async (text: string) => {
    if (text) {
      try {
        const response = await githubApi.searchUser(text);
        /* Se a API responder, atualiza o estado global de
        usuário selecionado com o resultado */
        setProfile({
          avatar_url: response.avatar_url,
          name: response.name,
          id: response.id,
          login: response.login,
          location: response.location,
          followers: response.followers,
          public_repos: response.public_repos,
          repos_url: response.repos_url,
        });
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setIsLoading(false);
        }
      }
    }
  }, 800);

  async function handleInput(text: string) {
    /* Remove o resultado anterior, coloca a tela em modo de
    carregamento e pesquisa pelo input atual do usuário */
    setProfile(null);
    setInput(text);
    setIsLoading(true);
    queryUsers(text);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setProfile(null);
      setInput("");
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <StatusBar backgroundColor="#252E32" />
      <HomeContainer>
        <LogoContainer>
          <Logo width={50} height={50} color="#838A8E" />
          <LogoText>hubusca</LogoText>
        </LogoContainer>
        <SearchInput
          value={input}
          onChangeText={handleInput}
          width="85%"
          placeholder="Insira um nome de usuário"
        />
        {input ? (
          <SearchResult
            profile={profile}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        ) : (
          <EmptyResults />
        )}
        <HistoryTitle>histórico</HistoryTitle>
        <SearchHistory />
      </HomeContainer>
    </>
  );
}
