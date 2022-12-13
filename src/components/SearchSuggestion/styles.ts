import styled from "styled-components/native";

export const SuggestionView = styled.View`
  display: flex;
  flex-direction: row;
  width: 70%;
  padding: 8px 25px;
  margin-top: 5px
  align-items: center;
  border: 1px;
  border-color: ${(props) => props.theme.colors.containerBorder};
  border-radius: 10px;
`;

export const SuggestionImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 100px;
  margin-right: 15px;
`;

export const SuggestionText = styled.Text`
  font-family: fredoka;
  font-size: 20px;
`;
