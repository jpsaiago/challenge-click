import styled from "styled-components/native";

export const HomeContainer = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 30px
  background-color: ${(props) => props.theme.colors.background};
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SuggestionView = styled.ScrollView`
  width: 100%;
  display: flex;
`;

export const LogoText = styled.Text`
  font-size: 30px;
  color: #838A8E
  margin-left: 5px
`;
