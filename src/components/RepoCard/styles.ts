import styled from "styled-components/native";
import { languageColor } from "../../utils/languageColor";

export const CardContainer = styled.View`
  width: 365px;
  height: 150px;
  padding: 15px;
  margin: 5px 0px;
  background-color: ${(props) => props.theme.colors.containerBackground};
  border: 1px;
  display: flex;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.containerBorder};
`;

//Header do card e seus elementos filhos
export const CardHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RepoName = styled.Text`
  font-family: hubot;
  font-size: 15px;
  color: ${(props) => props.theme.colors.font?.[300]};
`;

export const LanguageIcon = styled.Text<{ language: string }>`
  color: ${(props) => languageColor(props.language).font};
  font-family: hubot;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  min-width: 25px;
  background-color: ${(props) => languageColor(props.language).background};
  font-size: 15px;
`;

//Descrição do repo
export const RepoDescription = styled.Text`
  font-family: fredoka;
  font-size: 14px;
  color: ${(props) => props.theme.colors.font?.[200]}
  flex-grow: 1;
`;

//Footer do card e seus elementos filhos
export const CardFooter = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
`;

export const DateContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const DateTitle = styled.Text`
font-family: fredoka;
  font-size: 12px;
  color: ${(props) => props.theme.colors.font?.[200]}
  flex-grow: 1;
`;
export const DateText = styled.Text`
  font-family: fredoka;
  font-size: 14px;
  color: ${(props) => props.theme.colors.font?.[200]};
  flex-grow: 1;
`;
