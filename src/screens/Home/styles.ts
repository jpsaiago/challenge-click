import styled from "styled-components/native";

export const HomeContainer = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px
  background-color: ${(props) => props.theme.colors.background};
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const LogoText = styled.Text`
  margin-left: 5px
  font-size: 30px;
  font-family: hubot;
  color: #838A8E;
`;

export const EmptyResults = styled.View`
  margin-top: 10px;
  width: 85%;
  height: 100px;
`;

export const HistoryTitle = styled.Text`
  width: 85%;
  margin-top: 5px;
  font-family: fredoka;
  font-size: 16px;
  color: ${(props) => props.theme.colors.font?.[200]};
`;
