import styled from "styled-components/native";

export const ListHeader = styled.Text`
  font-family: fredoka;
  width: 90%;
  font-size: 16px;
  color: ${(props) => props.theme.colors.font?.[200]};
  margin-left: 5%;
`;

export const ErrorMessage = styled.Text`
  font-family: hubot;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 85%;
  color: ${(props) => props.theme.colors.font?.[300]};
`;
