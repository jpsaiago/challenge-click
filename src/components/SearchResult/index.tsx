import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import LocationPin from "../../../assets/svgs/locationPin.svg";
import { User } from "../../types/user";
import {
  ErrorMessage,
  InfoContainer,
  LocationContainer,
  LocationTag,
  LoginTag,
  NameTag,
  ResultContainer,
  ResultPicture,
} from "./styles";

interface Props {
  user: User.profile | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchResult({ user, isLoading, setIsLoading }: Props) {
  const navigation = useNavigation();

  if (isLoading) {
    return <ErrorMessage>carregando...</ErrorMessage>;
  }

  if (!user) {
    return <ErrorMessage>Usuário não encontrado</ErrorMessage>;
  }

  return (
    <ResultContainer>
      <Pressable onPress={() => window.alert("oi")}>
        <ResultPicture
          source={{ uri: user.avatar_url }}
          onLoad={() => setIsLoading(false)}
        />
      </Pressable>
      <InfoContainer>
        <LoginTag>{user.login}</LoginTag>
        <NameTag>{user.name ?? "-"}</NameTag>
        <LocationContainer>
          <LocationTag>{user.location ?? "-"}</LocationTag>
          <LocationPin width={15} height={15} color="#A6A8B4" />
        </LocationContainer>
      </InfoContainer>
    </ResultContainer>
  );
}
