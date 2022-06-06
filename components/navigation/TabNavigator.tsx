import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BoardNavigator from "./BoardNavigator";
import ArchieveList from "../Archieve/ArchieveList";
import { MaterialCommunityIcon as Icon } from "./MaterialCommunityIcon";

const Tab = createBottomTabNavigator();

import type { RouteProp, ParamListBase } from "@react-navigation/native";
import ProfileNavigator from "./ProfileNavigator";

import RankNavigator from "./RankNavigator";
import ChatNavigator from "./ChatNavigator";

type TabBarIconProps = { focused: boolean; color: string; size: number };

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
      const { name } = route;
      const focusedColor = focused ? "#FFFFFF" : "#000000";
      switch (name) {
        case "Ranking":
          return (
            <Icon name="chart-box-outline" size={24} color={focusedColor} />
          );
        case "Archive":
          return (
            <Icon name="notebook-outline" size={24} color={focusedColor} />
          );
        case "Board":
          return (
            <Icon name="file-document-outline" size={24} color={focusedColor} />
          );
        case "Chat":
          return (
            <Icon
              name="comment-processing-outline"
              size={24}
              color={focusedColor}
            />
          );
        case "Profile":
          return (
            <Icon name="account-box-outline" size={24} color={focusedColor} />
          );
      }
    },
    tabBarStyle: { backgroundColor: "#6BBEE2" },
    tabBarActiveTintColor: "#FFFFFF",
    tabBarInactiveTintColor: "#000000",
    unmountOnBlur: true,
  };
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Ranking"
        component={RankNavigator}
        options={{
          tabBarLabel: "랭킹",
        }}
      />
      <Tab.Screen
        name="Archive"
        component={ArchieveList}
        options={{
          tabBarLabel: "아카이브",
        }}
      />
      <Tab.Screen
        name="Board"
        component={BoardNavigator}
        options={{
          tabBarLabel: "게시판",
        }}
      />
      {/* TODO profile Navigator */}
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarLabel: "채팅",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "프로필",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
