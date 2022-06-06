import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../LoginScreen";
import RegisterScreen from "../RegisterScreen";
import SearchID from "../SearchID";
import SearchPW from "../SearchPW";
import ResetPW from "../ResetPW";
import TabNavigator from "./TabNavigator";
import ProfilePage from "../Profile/ProfilePage";
import MyPage from "../MyPage";
import ModifyProfile from "../Profile/ModifyProfile";
import GenerateArchieve from "../Archieve/GenerateArchieve";
import ArchieveList from "../Archieve/ArchieveList";
import ClubList from "../Profile/ClubList";
import RecommendClubList from "../Profile/RecommendClubList";
import ChatMessage from "../ChatMessage";
import GenerateProfile from "../Profile/GenerateProfile";
import BoardNew from "../BoardNew";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* test */}
      {/* <Stack.Screen name="test" component={ArchieveList} /> */}

      {/* real */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SearchID" component={SearchID} />
      <Stack.Screen name="SearchPW" component={SearchPW} />
      <Stack.Screen name="ResetPW" component={ResetPW} />
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="TabbedScreen" component={TabNavigator} />
      <Stack.Screen name="ChatMessage" component={ChatMessage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
