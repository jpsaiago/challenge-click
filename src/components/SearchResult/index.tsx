import React from "react";
import { Text, Image } from "react-native";
import { User } from "../../types/user";
import { ResultContainer } from "./styles";

interface Props {
  user: User.profile;
}

export function SearchResult({ user }: Props) {
  return (
    <ResultContainer>
      <Image
        source={{ uri: user.avatar_url }}
        style={{ width: 80, height: 80, borderRadius: 100 }}
      ></Image>
      <Text>{user.name}</Text>
    </ResultContainer>
  );
}
