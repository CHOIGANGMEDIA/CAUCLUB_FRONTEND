import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProfilePage from "../Profile/ProfilePage";
import Ranking from "../Ranking/Ranking";

const Stack = createStackNavigator();

const RankNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RankScreen" component={Ranking} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  );
};

export default RankNavigator;
