/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import ChatStyle from "./Style/ChatStyle";
import InitialStlye from "./Style/InitialStyle";
import { SafeAreaView } from "./navigation/SafeAreaView";
import { NavigationHeader } from "./navigation/NavigationHeader";
import { useIsFocused, useRoute } from "@react-navigation/native";
import instance from "../data/FirebaseStorage";
import firebase from "firebase/compat";

type Chat = {
  sentBy: string; // 보낸거면 T 받은거면 F
  text: string;
};

const ChatMessage = () => {
  const route = useRoute<any>();
  const { myId, opId, opName, roomId } = route.params;
  const [msgText, setMsgText] = useState<string>("");
  const [chats, setChats] = useState<Chat[]>([]);
  const isFocused = useIsFocused();

  const msgList = chats.map((msg, i) => {
    return (
      <View
        key={i}
        style={{ alignItems: msg.sentBy === myId ? "flex-end" : "flex-start" }}
      >
        <Text
          style={
            msg.sentBy === myId
              ? ChatStyle.sendMessage
              : ChatStyle.receiveMessage
          }
        >
          {msg.text}
        </Text>
      </View>
    );
  });

  // load message
  useEffect(() => {
    const fetchMsg = async () => {
      if (roomId) {
        instance.ref
          .child("rooms")
          .child(roomId)
          .child("chats")
          .on("value", (response) => {
            setChats([]);
            setChats(snapshotToChats(response));
          });
      }
    };
    fetchMsg();
  }, [roomId]);

  const snapshotToChats = (snap: firebase.database.DataSnapshot) => {
    const returnChats: Chat[] = [];
    snap.forEach((childSnap) => {
      const chat: Chat = {
        sentBy: childSnap.child("sentBy").val(),
        text: childSnap.child("text").val(),
      };
      returnChats.push(chat);
    });
    return returnChats;
  };

  const send = () => {
    const msg = {
      sentBy: myId,
      text: msgText,
    };
    instance.ref.child("rooms").child(roomId).child("chats").push(msg);
    instance.ref
      .child("userRooms")
      .child(myId)
      .child(opId)
      .child("recent")
      .set(msg.text);

    instance.ref
      .child("userRooms")
      .child(opId)
      .child(myId)
      .child("recent")
      .set(msg.text);

    setMsgText("");
  };

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <Text style={ChatStyle.chatName}>{opName}</Text>
      <KeyboardAwareScrollView style={ChatStyle.chatScrollView}>
        {msgList}
      </KeyboardAwareScrollView>
      <View style={ChatStyle.chatControl}>
        <TextInput
          style={ChatStyle.chatInput}
          placeholder={"write message"}
          value={msgText}
          onChangeText={(text) => setMsgText(text)}
        ></TextInput>
        <TouchableHighlight style={ChatStyle.sendButton} onPress={send}>
          <Text style={{ color: "#143365" }}>전송</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default ChatMessage;
