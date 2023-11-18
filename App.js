const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import WaitingScreen from "./screens/WaitingScreen";
import Login from "./screens/Login";
import Group from "./screens/Group";
import B12 from "./screens/B12";
import A6 from "./screens/A6";
import B14 from "./screens/B14";
import A10 from "./screens/A10";
import A5 from "./screens/A5";
import B13 from "./screens/B13";
import A9 from "./screens/A9";
import A4 from "./screens/A4";
import A8 from "./screens/A8";
import B11 from "./screens/B11";
import A3 from "./screens/A3";
import A7 from "./screens/A7";
import A2 from "./screens/A2";
import A1 from "./screens/A1";
import SignUp from "./screens/SignUp";
import PDF1 from "./screens/PDF1";
import PDF from "./screens/PDF";
import Result from "./screens/Result";
import HomeScreen from "./screens/HomeScreen";
import AssessmentOver from "./screens/AssessmentOver";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WaitingScreen"
              component={WaitingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="B12"
              component={B12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A6"
              component={A6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="B14"
              component={B14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A10"
              component={A10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A5"
              component={A5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="B13"
              component={B13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A9"
              component={A9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A4"
              component={A4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A8"
              component={A8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="B11"
              component={B11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A3"
              component={A3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A7"
              component={A7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A2"
              component={A2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A1"
              component={A1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDF1"
              component={PDF1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDF"
              component={PDF}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AssessmentOver"
              component={AssessmentOver}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
