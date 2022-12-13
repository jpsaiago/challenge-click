import styled from "styled-components/native";

export const HomeContainer = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 50px
  background-color: ${(props) => props.theme.colors.background};
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

export const LogoText = styled.Text`
  margin-left: 5px
  font-size: 30px;
  font-family: hubot;
  color: #838A8E;
`;
