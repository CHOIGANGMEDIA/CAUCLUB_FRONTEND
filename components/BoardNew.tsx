/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight, TextInput, Alert } from "react-native";
import InitialStlye from "./Style/InitialStyle";
import BoardStyle from "./Style/BoardStyle";
import { customAxios } from "../src/axiosModule/customAxios";

import BottomBox from "./BottomBox/BottomBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationHeader } from "./navigation/NavigationHeader";
import { SafeAreaView } from "./navigation/SafeAreaView";
const BoardNew = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { clubId, loggedId } = route.params;
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const createPost = () => {
    if (title === "") Alert.alert("제목을 입력해 주세요");
    else if (body === "") Alert.alert("내용을 입력해 주세요");
    else {
      customAxios
        .post(`/${loggedId}/${clubId}/newPost?title=${title}&contents=${body}`)
        .then((response) => {
          if (response.data) {
            Alert.alert("게시판에 글이 등록되었습니다. ");
            navigation.goBack();
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <View style={BoardStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>게시판</Text>
      </View>
      <KeyboardAwareScrollView>
        <View style={{ height: 551, alignItems: "center" }}>
          <TextInput
            style={BoardStyle.inputTitle}
            onChangeText={(text) => setTitle(text)}
            placeholder={"제목을 입력해 주세요"}
          ></TextInput>
          <TextInput
            style={BoardStyle.inputContent}
            onChangeText={(text) => setBody(text)}
            placeholder={"내용을 입력해 주세요"}
          ></TextInput>
          <TouchableHighlight
            style={BoardStyle.submmitButton}
            onPress={createPost}
          >
            <Text style={{ color: "white", fontSize: 17, fontWeight: "900" }}>
              작성 완료
            </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BoardNew;
