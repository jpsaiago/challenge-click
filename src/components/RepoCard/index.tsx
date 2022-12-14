import { Pressable, View } from "react-native";
import { User } from "../../types/user";
import {
  CardContainer,
  RepoName,
  LanguageIcon,
  CardHeader,
  RepoDescription,
  CardFooter,
  DateTitle,
  DateText,
  DateContainer,
} from "./styles";
import dayjs from "dayjs";
import * as WebBrowser from "expo-web-browser";

interface Props {
  repo: User.repo;
}

export function RepoCard({ repo }: Props) {
  /*Tive que transformar a data com a biblioteca Day.js, por algum motivo os métodos
  nativos de formatação de datas retornam undefined*/
  const creationDate = dayjs(repo.created_at);
  const lastPush = dayjs(repo.pushed_at);
  return (
    <CardContainer>
      <Pressable
        onPress={async () => {
          await WebBrowser.openBrowserAsync(repo.html_url);
        }}
        style={{ height: "100%" }}
      >
        <CardHeader>
          <RepoName>{repo.name}</RepoName>
          <View>
            <LanguageIcon language={repo.language}>
              {repo.language}
            </LanguageIcon>
          </View>
        </CardHeader>
        <RepoDescription numberOfLines={3}>
          {repo.description ?? "Sem descrição"}
        </RepoDescription>
        <CardFooter>
          <DateContainer>
            <DateTitle>criado em</DateTitle>
            <DateText>{`${creationDate.format("DD/MM/YYYY")}`}</DateText>
          </DateContainer>
          <DateContainer>
            <DateTitle>último push</DateTitle>
            <DateText>{`${lastPush.format("DD/MM/YYYY")}`}</DateText>
          </DateContainer>
        </CardFooter>
      </Pressable>
    </CardContainer>
  );
}
