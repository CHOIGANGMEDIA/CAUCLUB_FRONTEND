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
import ProfileList from "../Profile/ProfileList";
import ArchiveView from "../Profile/ArchiveView";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* test */}
      {/* <Stack.Screen name="test" component={ArchieveList} /> */}

      {/* real */}
      <Stack.Screen name="ProfileList" component={ProfileList} />
      <Stack.Screen name="ModifyProfile" component={ModifyProfile} />
      <Stack.Screen name="GenerateArchieve" component={GenerateArchieve} />
      <Stack.Screen name="OtherClubs" component={ClubList} />
      <Stack.Screen name="RecommendClubList" component={RecommendClubList} />
      <Stack.Screen name="GenerateClub" component={GenerateProfile} />
      <Stack.Screen name="GenerateBoard" component={BoardNew} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="ArchiveView" component={ArchiveView} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
