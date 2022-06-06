/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight, Image } from "react-native";
import ChatStyle from "./Style/ChatStyle";
import InitialStlye from "./Style/InitialStyle";
import { NavigationHeader } from "./navigation/NavigationHeader";
import { SafeAreaView } from "./navigation/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { customAxios } from "../src/axiosModule/customAxios";
import type { Club } from "./Profile/Club";
import instance from "../data/FirebaseStorage";
import firebase from "firebase/compat";
import ClubList from "./Profile/ClubList";

let imagePath = require("./images/푸앙_윙크.png");
type ChatProfile = {
  opId: string;
  opName: string;
  picture: string;
  roomId: string;
  recent: string;
};
// TODO 스냅샷 위에 맞게 어레이갖다가 뿌리기
const ChatList = () => {
  const [id, setId] = useState<string>("");
  const [charRooms, setChatRooms] = useState<ChatProfile[]>([]);

  const navigation = useNavigation<any>();
  useEffect(() => {
    AsyncStorage.getItem("loggedId")
      .then((result) => {
        if (result) setId(result);
      })
      .then(() => {});
  }, []);

  // get Chatroom list from firebase TODO
  useEffect(() => {
    const fetchRooms = async () => {
      instance.ref
        .child("userRooms")
        .child(id)
        .once("value", (response) => {
          setChatRooms([]);
          setChatRooms(snapshotToChatProfiles(response));
        })
        .catch((error) => console.log(error));
    };
    if (id !== "") fetchRooms();
  }, [id]);

  const snapshotToChatProfiles = (snapshot: firebase.database.DataSnapshot) => {
    const returnArr: ChatProfile[] = [];
    snapshot.forEach((childSnap: any) => {
      const chatP: ChatProfile = {
        opId: childSnap.key,
        opName: childSnap.child("opName").val(),
        picture: childSnap.child("picture").val(),
        recent: childSnap.child("recent").val(),
        roomId: childSnap.child("roomId").val(),
      };
      returnArr.push(chatP);
    });
    return returnArr;
  };

  // TODO
  const chatList = charRooms.map((chatP) => {
    return (
      <React.Fragment key={chatP.opId}>
        <Image source={{ uri: chatP.picture }} style={ChatStyle.profile} />

        <TouchableHighlight
          style={{ width: "75%", alignItems: "flex-start" }}
          onPress={() =>
            navigation.navigate("ChatMessage", {
              myId: id,
              opId: chatP.opId,
              opName: chatP.opName,
              roomId: chatP.roomId,
            })
          }
        >
          <View>
            <Text style={ChatStyle.clubName}>{chatP.opName}</Text>
            <Text style={ChatStyle.lastMessage}>{chatP.recent}</Text>
          </View>
        </TouchableHighlight>
      </React.Fragment>
    );
  });

  return (
    <SafeAreaView>
      <NavigationHeader />
      <View>
        <Text style={InitialStlye.boardTitle}>채팅</Text>
      </View>
      <KeyboardAwareScrollView style={{ height: 569 }}>
        {chatList.length > 0 ? (
          <View style={ChatStyle.chatList}>{chatList}</View>
        ) : null}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ChatList;
