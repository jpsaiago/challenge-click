import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";

const Stack = createNativeStackNavigator();

export function Routes() {
  //Retorna o tema atual do aparelho para aplicar os diferentes temas
  const colorMode = useColorScheme();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: `${colorMode == "light" ? "#252E32" : "white"}`,
          },
          title: "",
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
