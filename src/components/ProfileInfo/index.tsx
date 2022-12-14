import React from "react";
import { View } from "react-native";
import LocationPin from "../../../assets/svgs/locationPin.svg";
import { User } from "../../types/user";
import {
  BasicInfoContainer,
  PictureContainer,
  ProfilePicture,
  InfoTextContainer,
  LoginTag,
  NameTag,
  LocationContainer,
  LocationTag,
  DetailsContainer,
  DetailTitle,
  DetailText,
} from "./styles";

interface Props {
  profile: User.profile;
}

export function ProfileInfo({ profile }: Props) {
  return (
    <>
      <BasicInfoContainer>
        <PictureContainer>
          <ProfilePicture source={{ uri: profile.avatar_url }} />
        </PictureContainer>
        <InfoTextContainer>
          <LoginTag>{profile.login}</LoginTag>
          <NameTag>{profile.name ?? "-"}</NameTag>
          <LocationContainer>
            <LocationPin width={18} height={18} color="#A6A8B4" />
            <LocationTag>{profile.location ?? "-"}</LocationTag>
          </LocationContainer>
        </InfoTextContainer>
      </BasicInfoContainer>
      <DetailsContainer>
        <View>
          <DetailTitle>ID</DetailTitle>
          <DetailText>{profile.id}</DetailText>
        </View>
        <View>
          <DetailTitle>Seguidores</DetailTitle>
          <DetailText>{profile.followers}</DetailText>
        </View>
        <View>
          <DetailTitle>Repositórios</DetailTitle>
          <DetailText>{profile.public_repos}</DetailText>
        </View>
      </DetailsContainer>
    </>
  );
}
