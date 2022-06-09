import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ArchieveList from "../Archieve/ArchieveList";
import ModifyArchieve from "../Archieve/ModifyArchieve";
import ProfilePage from "../Profile/ProfilePage";
import ModifyProfile from "../Profile/ModifyProfile";
import BoardNew from "../BoardNew";
import GenerateArchieve from "../Archieve/GenerateArchieve";
import ArchiveView from "../Profile/ArchiveView";

const Stack = createStackNavigator();

const ArchiveNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArchiveList" component={ArchieveList} />
      <Stack.Screen name="ArchiveModify" component={ModifyArchieve} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="ModifyProfile" component={ModifyProfile} />
      <Stack.Screen name="GenerateBoard" component={BoardNew} />
      <Stack.Screen name="GenerateArchieve" component={GenerateArchieve} />
      <Stack.Screen name="ArchiveView" component={ArchiveView} />
    </Stack.Navigator>
  );
};

export default ArchiveNavigator;
