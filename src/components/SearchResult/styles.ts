import styled from "styled-components/native";

export const ResultContainer = styled.View`
  margin-top: 15px;
  padding: 10px 15px;
  border: 1px;
  border-color: ${(props) => props.theme.colors.containerBorder};
  border-radius: 10px;
  background-color: white
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center
  width: 85%;
  height: 100px;
`;

export const ResultPicture = styled.Image`
  border-radius: 100px;
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 10px;
`;

export const InfoContainer = styled.View`
  height: 100%;
  flex-grow: 1;
`;

export const NameTag = styled.Text`
  font-family: fredoka;
  font-size: 14px;
  color: ${(props) => props.theme.colors.font?.[300]};
`;

export const LoginTag = styled.Text`
  font-family: fredoka;
  font-size: 20px;
  color: ${(props) => props.theme.colors.font?.[300]};
`;

export const LocationContainer = styled.View`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LocationTag = styled.Text`
  font-family: fredoka;
  font-size: 14px;
  color: ${(props) => props.theme.colors.font?.[200]};
  margin-right: 4px;
`;

export const ErrorMessage = styled.Text`
  font-family: fredoka;
  font-size: 18px;
  color: ${(props) => props.theme.colors.font?.[100]};
`;
