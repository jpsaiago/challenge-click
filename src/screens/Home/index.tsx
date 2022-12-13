import React, { useState } from "react";
import { ScrollView, StatusBar, Text } from "react-native";
import Logo from "../../../assets/svgs/logoHubusca.svg";
import { SearchInput } from "../../components/SearchInput";
import { useDebounce } from "../../hooks/useDebounce";
import { userApi } from "../../services/usersApi";
import {
  LogoContainer,
  HomeContainer,
  LogoText,
  SuggestionView,
} from "./styles";
import { SearchSuggestion } from "../../components/SearchSuggestion";
import { User } from "../../types/user";

export function Home() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState<{ login: string; imageUrl: string }[]>([]);
  const [iserror, setIsError] = useState(false);
  const queryUsers = useDebounce(async (text: string) => {
    setUsers([]);
    if (text) {
      try {
        const response = await userApi.search(text);
        response.map((user) =>
          setUsers((oldState) => [
            ...oldState,
            { login: user.login, imageUrl: user.avatar_url },
          ])
        );
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
        }
      }
    }
  }, 500);

  async function handleInput(text: string) {
    setInput(text);
    queryUsers(text);
  }

  return (
    <>
      <StatusBar backgroundColor="#252E32" />
      <HomeContainer>
        <LogoContainer>
          <Logo width={50} height={50} color="#838A8E" />
          <LogoText style={{ fontFamily: "hubot" }}>hubusca</LogoText>
        </LogoContainer>
        <SearchInput
          value={input}
          onChangeText={handleInput}
          width="70%"
          placeholder="Insira um nome de usuário"
        />
        <SuggestionView contentContainerStyle={{ alignItems: "center" }}>
          {users.map((user, index) => (
            <SearchSuggestion
              key={index}
              login={user.login}
              imageUrl={user.imageUrl}
            />
          ))}
        </SuggestionView>
      </HomeContainer>
    </>
  );
}
