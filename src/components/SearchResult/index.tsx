import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import LocationPin from "../../../assets/svgs/locationPin.svg";
import { HistoryContext } from "../../contexts/historyContext";
import { UserContext } from "../../contexts/userContext";
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
  setIsLoading: CallableFunction;
}

export function SearchResult({ profile, isLoading, setIsLoading }: Props) {
  const { history, setHistory } = useContext(HistoryContext);
  const { setProfile } = useContext(UserContext);
  const navigation = useNavigation<HomeNavigationProp>();

  if (isLoading) {
    return (
      <ResultContainer>
        <ErrorMessage>Carregando...</ErrorMessage>
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

  function handlePress() {
    if (!history?.some((user) => user.login == profile?.login) && profile) {
      const copy = Array.from(history);
      copy.unshift(profile);
      setHistory(copy);
    }
    setProfile(profile);
    navigation.navigate("Profile");
  }

  return (
    <ResultContainer>
      <Pressable onPress={handlePress}>
        <ResultPicture
          source={{ uri: profile.avatar_url }}
          onLoad={() => setIsLoading(false)}
        />
      </Pressable>
      <InfoContainer>
        <View>
          <LoginTag>{profile.login}</LoginTag>
          <NameTag>{profile.name ?? "-"}</NameTag>
        </View>
        <LocationContainer>
          <LocationTag>{profile.location ?? "-"}</LocationTag>
          <LocationPin width={13} height={13} color="#A6A8B4" />
        </LocationContainer>
      </InfoContainer>
    </ResultContainer>
  );
}
