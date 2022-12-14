import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { Text } from "react-native";
import { useColorScheme } from "react-native/";
import { ThemeProvider } from "styled-components/native";
import { HistoryContext } from "./src/contexts/historyContext";
import { UserContext } from "./src/contexts/userContext";
import { Routes } from "./src/Routes";
import { theme } from "./src/theme/theme";
import { User } from "./src/types/user";

export default function App() {
  /* Armazena o estado do usuário atualmente selecionado no topo da árvore de componentes
  para ser repassado via Context conforme o necessário */
  const [user, setUser] = useState<User.profile | null>(null);
  const [history, setHistory] = useState<User.profile[]>([]);

  //Retorna o tema atual do aparelho para aplicar os diferentes temas
  const colorMode = useColorScheme();

  //Impede que o saia da tela inicial, para que possamos carregar as fontes
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    hubot: require("./assets/fonts/Hubot-Sans-MediumWide.otf"),
    fredoka: require("./assets/fonts/Fredoka-Regular.ttf"),
  });

  //Só mostra o aplicativo se as fontes forem carregadas
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ThemeProvider theme={colorMode === "dark" ? theme.dark : theme.light}>
        <UserContext.Provider value={{ profile: user, setProfile: setUser }}>
          <HistoryContext.Provider
            value={{ history: history, setHistory: setHistory }}
          >
            <Routes />
          </HistoryContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
