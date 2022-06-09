import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GenerateArchieve from "../Archieve/GenerateArchieve";
import ModifyArchieve from "../Archieve/ModifyArchieve";
import BoardNew from "../BoardNew";
import ArchiveView from "../Profile/ArchiveView";
import ModifyProfile from "../Profile/ModifyProfile";
import ProfilePage from "../Profile/ProfilePage";
import Ranking from "../Ranking/Ranking";

const Stack = createStackNavigator();

const RankNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RankScreen" component={Ranking} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="ModifyProfile" component={ModifyProfile} />
      <Stack.Screen name="GenerateBoard" component={BoardNew} />
      <Stack.Screen name="GenerateArchieve" component={GenerateArchieve} />
      <Stack.Screen name="ArchiveView" component={ArchiveView} />
      <Stack.Screen name="ArchiveModify" component={ModifyArchieve} />
    </Stack.Navigator>
  );
};

export default RankNavigator;
