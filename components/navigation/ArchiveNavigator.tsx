import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ArchieveList from "../Archieve/ArchieveList";
import ModifyArchieve from "../Archieve/ModifyArchieve";

const Stack = createStackNavigator();

const ArchiveNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArchiveList" component={ArchieveList} />
      <Stack.Screen name="ArchiveModify" component={ModifyArchieve} />
    </Stack.Navigator>
  );
};

export default ArchiveNavigator;
