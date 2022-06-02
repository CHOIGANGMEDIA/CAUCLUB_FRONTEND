/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight } from "react-native";
import ChatStyle from "./Style/ChatStyle";
import InitialStlye from "./Style/InitialStyle";
import { NavigationHeader } from "./navigation/NavigationHeader";
import { SafeAreaView } from "./navigation/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { customAxios } from "../src/axiosModule/customAxios";
import type { Club } from "./Profile/Club";

const ChatList = () => {
  const [id, setId] = useState<string>();
  const [others, setOthes] = useState<number[]>();
  const [othersInfo, setOthesInfo] = useState<Club[]>();
  const navigation = useNavigation<any>();
  useEffect(() => {
    AsyncStorage.getItem("loggedId")
      .then((result) => {
        if (result) setId(result);
      })
      .then(() => {});
  }, []);

  const chatList = (other: number, name: string, recent: string) => {
    return (
      <>
        <TouchableHighlight style={ChatStyle.profile}>
          <></>
          {/* 프로필 사진 */}
        </TouchableHighlight>

        <TouchableHighlight
          style={{ width: "75%", alignItems: "flex-start" }}
          onPress={() =>
            navigation.navigate("ChatMessage", { loggedId: id, other: other })
          }
        >
          <View>
            <Text style={ChatStyle.clubName}>동아리명</Text>
            <Text style={ChatStyle.lastMessage}>최근 메시지</Text>
          </View>
        </TouchableHighlight>
      </>
    );
  };

  return (
    <SafeAreaView>
      <NavigationHeader />
      <View>
        <Text style={InitialStlye.boardTitle}>채팅</Text>
      </View>
      <KeyboardAwareScrollView style={{ height: 569 }}>
        <View style={ChatStyle.chatList}>
          {chatList(2, "퍼주마", "네 가능합니다")}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ChatList;
