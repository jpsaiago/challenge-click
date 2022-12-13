import React from "react";

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
import LocationPin from "../../../assets/svgs/locationPin.svg";

interface Props {
  user: User.profile | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchResult({ user, isLoading, setIsLoading }: Props) {
  if (isLoading) {
    return <ErrorMessage>carregando...</ErrorMessage>;
  }

  if (!user) {
    return <ErrorMessage>Usuário não encontrado</ErrorMessage>;
  }

  return (
    <ResultContainer>
      <ResultPicture
        source={{ uri: user.avatar_url }}
        onLoad={() => setIsLoading(false)}
      />
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
