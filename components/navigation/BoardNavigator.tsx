import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BoardList from "../BoardList";
import BoardScreen from "../BoardScreen";
import BoardModify from "../BoardModify";
import ProfilePage from "../Profile/ProfilePage";
import ModifyProfile from "../Profile/ModifyProfile";
import BoardNew from "../BoardNew";
import GenerateArchieve from "../Archieve/GenerateArchieve";
import ArchiveView from "../Profile/ArchiveView";

const Stack = createStackNavigator();

const BoardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BoardList" component={BoardList} />
      <Stack.Screen name="BoardScreen" component={BoardScreen} />
      <Stack.Screen name="BoardModify" component={BoardModify} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="ModifyProfile" component={ModifyProfile} />
      <Stack.Screen name="GenerateBoard" component={BoardNew} />
      <Stack.Screen name="GenerateArchieve" component={GenerateArchieve} />
      <Stack.Screen name="ArchiveView" component={ArchiveView} />
    </Stack.Navigator>
  );
};

export default BoardNavigator;
