import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, View } from "react-native";
import LocationPin from "../../../assets/svgs/locationPin.svg";
import { StackParamList } from "../../Routes";
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

//Importamos a tipagem do navegador de Stack para usarmos na prop 'navigate'
type HomeNavigationProp = NativeStackNavigationProp<StackParamList, "Home">;

interface Props {
  profile: User.profile | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchResult({ profile, isLoading, setIsLoading }: Props) {
  const navigation = useNavigation<HomeNavigationProp>();

  if (isLoading) {
    return (
      <ResultContainer>
        <ErrorMessage>carregando...</ErrorMessage>
      </ResultContainer>
    );
  }

  if (!profile) {
    return (
      <ResultContainer>
        <ErrorMessage>Usuário não encontrado</ErrorMessage>
      </ResultContainer>
    );
  }

  return (
    <ResultContainer>
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <ResultPicture
          source={{ uri: profile.avatar_url }}
          onLoad={() => setIsLoading(false)}
        />
      </Pressable>
      <InfoContainer>
        <LocationContainer>
          <LocationTag>{profile.location ?? "-"}</LocationTag>
          <LocationPin width={13} height={13} color="#A6A8B4" />
        </LocationContainer>
        <View>
          <LoginTag>{profile.login}</LoginTag>
          <NameTag>{profile.name ?? "-"}</NameTag>
        </View>
      </InfoContainer>
    </ResultContainer>
  );
}
