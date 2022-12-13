import React, { useContext, useState } from "react";
import { StatusBar } from "react-native";
import Logo from "../../../assets/svgs/logoHubusca.svg";
import { SearchInput } from "../../components/SearchInput";
import { SearchResult } from "../../components/SearchResult";
import { UserContext } from "../../contexts/userContext";
import { useDebounce } from "../../hooks/useDebounce";
import { userApi } from "../../services/usersApi";
import { HomeContainer, LogoContainer, LogoText } from "./styles";

export function Home() {
  const [input, setInput] = useState("");
  const { profile, setProfile } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const queryUsers = useDebounce(async (text: string) => {
    if (text) {
      try {
        const response = await userApi.search(text);
        /* Se a API responder, atualiza o estado global de
        usuário selecionado com o resultado */
        setProfile({
          avatar_url: response.avatar_url,
          followers: response.followers,
          location: response.location,
          name: response.name,
          public_repos: response.public_repos,
          login: response.login,
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
        {input && (
          <SearchResult
            user={profile}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        )}
      </HomeContainer>
    </>
  );
}
