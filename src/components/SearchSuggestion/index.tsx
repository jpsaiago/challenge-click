import { SuggestionImage, SuggestionText, SuggestionView } from "./styles";

interface Props {
  login: string;
  imageUrl: string;
}

export function SearchSuggestion({ login, imageUrl }: Props) {
  return (
    <SuggestionView>
      <SuggestionImage
        source={[
          {
            uri: imageUrl,
          },
        ]}
      />
      <SuggestionText>{login}</SuggestionText>
    </SuggestionView>
  );
}
