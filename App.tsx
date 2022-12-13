import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { useColorScheme } from "react-native/";
import { theme } from "./src/theme/theme";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const colorMode = useColorScheme();
  const [fontsLoaded] = useFonts({
    hubot: require("./assets/fonts/Hubot-Sans-MediumWide.otf"),
    fredoka: require("./assets/fonts/Fredoka-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  SplashScreen.hideAsync();
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
