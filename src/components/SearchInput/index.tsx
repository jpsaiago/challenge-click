import { TextInputProps } from "react-native";
import SearchUser from "../../../assets/svgs/searchUser.svg";
import { InputContainer, Input, IconContainer } from "./styles";

interface Props extends TextInputProps {
  width?: string;
  height?: string;
}

export function SearchInput({ height, width, onChangeText, ...props }: Props) {
  return (
    <InputContainer height={height} width={width}>
      <Input {...props} onChangeText={onChangeText} />
      <IconContainer>
        <SearchUser width={"100%"} height={"100%"} color="darkgray" />
      </IconContainer>
    </InputContainer>
  );
}
