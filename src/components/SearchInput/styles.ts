import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface Props extends TextInputProps {
  width?: string;
  height?: string;
}

export const Input = styled.TextInput`
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.textField};
  height: 100%;
  width: 90%;
`;

export const InputContainer = styled.View<Props>`
  width: ${(p) => p.width ?? "100%"};
  height: ${(p) => p.height ?? "35px"};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(p) => p.theme.colors.textField};
  border-radius: 5px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const IconContainer = styled.View`
  width: 10%;
  height: 23px;
  margin-left: 5px;
`;
