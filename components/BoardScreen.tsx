/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight, Alert } from "react-native";
import BoardStyle from "./Style/BoardStyle";

import { PostProps } from "./BoardList";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationHeader } from "./navigation/NavigationHeader";
import { SafeAreaView } from "./navigation/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customAxios } from "../src/axiosModule/customAxios";
import ProfilePageStyle from "./Style/ProfilePageStyle";

const BoardScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [myRole, setMyRole] = useState<string>("");
  const { postId, clubName, clubId, title, contents } = route.params;

  useEffect(() => {
    const fetchData = () => {
      AsyncStorage.getItem("loggedId").then((result) => {
        if (result !== null) {
          customAxios
            .get(`/${result}/${clubId}/enterValid`)
            .then((response) => {
              setMyRole(response.data);
              console.log(response.data);
            })
            .catch((error) => console.log(error));
        } else {
          Alert.alert("다시 로그인 해 주세요");
          navigation.reset({ routes: [{ name: "LoginScreen" }] });
        }
      });
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <KeyboardAwareScrollView>
        <View
          style={{ width: "100%", borderBottomWidth: 0.5, borderColor: "#444" }}
        />
        <View>
          <View style={{ height: 553, alignItems: "center" }}>
            <Text style={BoardStyle.screenTitle}>{title}</Text>
            <View
              style={{
                flexDirection: "row",
                width: "95%",
                justifyContent: "flex-start",
              }}
            >
              <Text style={BoardStyle.screenClub}>작성자: </Text>
              {/* 동아리명(ChAOS) 클릭하면 해당 동아리 프로필로 가게끔 하려고 버튼으로 만들었어요 */}
              <TouchableHighlight
                style={BoardStyle.screenClub}
                onPress={() => navigation.navigate("ProfilePage", { clubId })}
              >
                <Text style={{ color: "black", fontWeight: "900" }}>
                  {clubName}
                </Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight
              style={[
                ProfilePageStyle.chatButton,
                { alignSelf: "flex-end", right: 20 },
              ]}
              onPress={() => {
                navigation.navigate("BoardModify", { postId: postId });
              }}
            >
              <Text style={{ color: "white", fontWeight: "900" }}>
                수정 / 삭제
              </Text>
            </TouchableHighlight>
            <Text style={BoardStyle.screenContent}>{contents}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BoardScreen;
