import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";

//Tipo exportado para ser usado na hora de invocar a navegação em outros componentes
export type StackParamList = {
  Home: undefined;
  Profile: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();

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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: `${colorMode == "light" ? "#252E32" : "white"}`,
          },
          title: "",
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
