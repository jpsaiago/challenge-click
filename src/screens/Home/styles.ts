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

export const HistoryView = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

export const EmptyResults = styled.View`
  margin-top: 15px;
  width: 85%;
  height: 100px;
`;
