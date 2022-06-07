import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ChatList from "../ChatList";
import ProfilePage from "../Profile/ProfilePage";

const Stack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
