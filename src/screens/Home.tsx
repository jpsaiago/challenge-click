import React, { useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import Logo from "../../assets/svgs/logoHubusca.svg";
import { SearchInput } from "../components/SearchInput";
import { useDebounce } from "../hooks/useDebounce";
import { userApi } from "../services/usersApi";

const StyledView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 30px
  background-color: ${(props) => props.theme.colors.background};
`;

export function Home() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState<string[]>([]);
  const queryUsers = useDebounce(async (text: string) => {
    setUsers([]);
    if (text) {
      try {
        const response = await userApi.search(text);
        response.map((user) =>
          setUsers((oldState) => [...oldState, user.login])
        );
      } catch (e) {
        if (e instanceof Error) {
          setUsers((oldState) => [...oldState, `${e}`]);
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
      <StyledView>
        <View>
          <Logo width={50} height={50} color="#838A8E" />
          <Text style={{ fontSize: 30 }}>Hubusca</Text>
        </View>
        <SearchInput
          value={input}
          onChangeText={handleInput}
          width="80%"
          placeholder="Insira um nome de usuário"
        />
        <ScrollView>
          {users.map((user, index) => (
            <Text key={index}>{user}</Text>
          ))}
        </ScrollView>
      </StyledView>
    </>
  );
}
