import styled from "styled-components/native";

//Container geral da tela de Perfil
export const ProfileView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
`;
