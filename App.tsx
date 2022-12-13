import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { useColorScheme } from "react-native";
import { theme } from "./src/theme/theme";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorMode = useColorScheme();
  const [fontsLoaded] = useFonts({
    hubot: require("./assets/fonts/Hubot-Sans-MediumWide.otf"),
  });

  useEffect(() => {
    async function hideSplash() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplash();
    }
  }, [fontsLoaded]);

  return (
    <NavigationContainer>
      <ThemeProvider theme={colorMode === "dark" ? theme.dark : theme.light}>
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
      </ThemeProvider>
    </NavigationContainer>
  );
}
