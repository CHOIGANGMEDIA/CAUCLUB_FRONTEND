/* eslint-disable prettier/prettier */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./components/navigation/MainNavigator";

const App = () => {
  // LogBox.ignoreAllLogs(true);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
