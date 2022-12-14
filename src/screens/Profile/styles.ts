import styled from "styled-components/native";
import { View } from "react-native";

//Container geral da tela de Perfil
export const ProfileView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
`;

//Lista de Repos
export const RepoContainer = styled.View`
width: 100%
height: 65%
background-color: violet
`;
