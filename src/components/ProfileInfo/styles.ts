import styled from "styled-components/native";

//Container das informações básicas do usuário
export const BasicInfoContainer = styled.View`
  height: 25%;
  display: flex;
  flex-direction: row;
`;

// Dimensão e posicionamento da imagem de perfil
export const PictureContainer = styled.View`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfilePicture = styled.Image`
  border-radius: 100px;
  width: 125px;
  height: 125px;
`;

//Dimensão e posicionamento das informações básicas do usuário
export const InfoTextContainer = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 60%;
`;

export const NameTag = styled.Text`
  font-family: fredoka;
  font-size: 25px;
  color: ${(props) => props.theme.colors.font?.[300]};
`;

export const LoginTag = styled.Text`
  font-family: fredoka;
  font-size: 30px;
  color: ${(props) => props.theme.colors.font?.[300]};
`;

export const LocationContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LocationTag = styled.Text`
  font-family: fredoka;
  font-size: 20px;
  color: ${(props) => props.theme.colors.font?.[200]};
  margin-left: 4px;
`;

//Container com detalhes do perfil do usuário
export const DetailsContainer = styled.View`
  width: 85%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around
  border-top-color: darkgray;
  border-top-width: 1px;
  margin: 0px auto;
`;
export const DetailText = styled.Text`
  font-family: hubot;
  font-size: 16px;
  color: ${(props) => props.theme.colors.font?.[200]};
`;
export const DetailTitle = styled.Text`
  font-family: hubot;
  font-size: 12px;
  color: ${(props) => props.theme.colors.font?.[300]};
`;
