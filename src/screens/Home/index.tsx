import React, { useState } from "react";
import { StatusBar, Text } from "react-native";
import Logo from "../../../assets/svgs/logoHubusca.svg";
import { SearchInput } from "../../components/SearchInput";
import { SearchResult } from "../../components/SearchResult";
import { useDebounce } from "../../hooks/useDebounce";
import { userApi } from "../../services/usersApi";
import { User } from "../../types/user";
import { LogoContainer, HomeContainer, LogoText } from "./styles";

export function Home() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<User.profile | null>(null);
  const [iserror, setIsError] = useState(false);

  const queryUsers = useDebounce(async (text: string) => {
    if (text) {
      try {
        const response = await userApi.search(text);
        setUser({
          avatar_url: response.avatar_url,
          followers: response.followers,
          location: response.location,
          name: response.name,
          public_repos: response.public_repos,
          login: response.login,
          repos_url: response.repos_url,
        });
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
        }
      }
    }
  }, 500);

  async function handleInput(text: string) {
    setUser(null);
    setInput(text);
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
          width="70%"
          placeholder="Insira um nome de usuário"
        />
        {user?.login ? <SearchResult user={user} /> : null}
      </HomeContainer>
    </>
  );
}
