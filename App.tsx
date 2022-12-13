import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { Text } from "react-native";
import { useColorScheme } from "react-native/";
import { ThemeProvider } from "styled-components/native";
import { UserContext } from "./src/contexts/userContext";
import { Home } from "./src/screens/Home";
import { theme } from "./src/theme/theme";
import { User } from "./src/types/user";

const Stack = createNativeStackNavigator();

export default function App() {
  /* Armazena o estado do usuário atualmente selecionado no topo da árvore de componentes
  para ser repassado via Context conforme o necessário */
  const [user, setUser] = useState<User.profile | null>(null);

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
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerStyle: {
                  backgroundColor: "#252E32",
                },
              }}
            />
          </Stack.Navigator>
        </UserContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
