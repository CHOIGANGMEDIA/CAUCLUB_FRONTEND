/* eslint-disable prettier/prettier */
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import ChatStyle from "./Style/ChatStyle";
import InitialStlye from "./Style/InitialStyle";
import { SafeAreaView } from "./navigation/SafeAreaView";
import { NavigationHeader } from "./navigation/NavigationHeader";

const ChatMessage = () => {
  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <Text style={ChatStyle.chatName}>동아리명</Text>
      <KeyboardAwareScrollView style={ChatStyle.chatScrollView}>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={ChatStyle.receiveMessage}>안녕하세요? 디자인 학과 동아리 쌈디 맞나요?</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={ChatStyle.sendMessage}>네! 쌈디 회장 사이먼입니다.</Text>
        </View>
        {/* 여기서부터 */}
        {/* 반복구간 */}
        <View style={{ alignItems: "flex-end" }}>
          <Text style={ChatStyle.sendMessage}>무슨 일이시죠?</Text>
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={ChatStyle.receiveMessage}>연합 활동을 하고 싶어서요!</Text>
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={ChatStyle.receiveMessage}>어떤 활동일까요?</Text>
        {/* 여기까지 */}
        {/* 반복구간 */}
      </KeyboardAwareScrollView>
      <View style={ChatStyle.chatControl}>
        <TextInput style={ChatStyle.chatInput}>
          <Text style={{ color: "#143365" }}>write message</Text>
        </TextInput>
        <TouchableHighlight style={ChatStyle.sendButton}>
          <Text style={{ color: "#143365" }}>send</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default ChatMessage;
