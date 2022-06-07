/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight, TextInput, Alert } from "react-native";
import InitialStlye from "./Style/InitialStyle";
import BoardStyle from "./Style/BoardStyle";
import BottomBox from "./BottomBox/BottomBox";
import { NavigationHeader } from "./navigation/NavigationHeader";
import { SafeAreaView } from "./navigation/SafeAreaView";
import { useNavigation, useRoute } from "@react-navigation/native";
import { customAxios } from "../src/axiosModule/customAxios";

const BoardModify = () => {
  const route = useRoute<any>();
  const { postId } = route.params;
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const navigaion = useNavigation<any>();

  useEffect(() => {
    customAxios
      .get(`/post/${postId}`)
      .then((result) => {
        setTitle(result.data.title);
        setContents(result.data.contents);
      })
      .catch((error) => console.log(error));
  }, []);

  const modify = () => {
    customAxios
      .patch(`/post/${postId}?title=${title}&contents=${contents}`)
      .then((result) => {
        if (result.data) {
          Alert.alert("글이 성공적으로 수정되었습니다. ");
          navigaion.reset({ routes: [{ name: "BoardList" }] });
        }
      })
      .catch((error) => console.log("modify : ", error));
  };

  const deletion = () => {
    customAxios
      .delete(`/post/${postId}`)
      .then((result) => {
        if (result.data) {
          Alert.alert("글이 성공적으로 삭제되었습니다. ");
          navigaion.reset({ routes: [{ name: "BoardList" }] });
        }
      })
      .catch((error) => console.log("modify : ", error));
  };

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <View style={BoardStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>게시판</Text>
        <TouchableHighlight
          style={BoardStyle.newContent}
          onPress={() => navigaion.goBack()}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: "900" }}>
            취소
          </Text>
        </TouchableHighlight>
      </View>
      <KeyboardAwareScrollView>
        <View style={{ height: 551, alignItems: "center" }}>
          <TextInput
            style={BoardStyle.inputTitle}
            placeholder={"제목"}
            value={title}
            onChangeText={(text) => {
              setTitle(text);
            }}
          ></TextInput>
          <TextInput
            style={BoardStyle.inputContent}
            placeholder={"내용"}
            onChangeText={(text) => {
              setContents(text);
            }}
            value={contents}
          ></TextInput>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableHighlight style={BoardStyle.button1} onPress={modify}>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "900" }}>
                수정
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={BoardStyle.button2} onPress={deletion}>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "900" }}>
                삭제
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BoardModify;
