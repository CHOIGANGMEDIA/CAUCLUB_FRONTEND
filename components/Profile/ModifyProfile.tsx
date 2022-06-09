/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  Alert,
} from "react-native";
import ProfilePageStyle from "../Style/ProfilePageStyle";
import Keyword from "./Keyword";
import Archieve from "./Archieve";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Club } from "./Club";
import { SafeAreaView } from "../navigation/SafeAreaView";
import { NavigationHeader } from "../navigation/NavigationHeader";
import { customAxios } from "../../src/axiosModule/customAxios";

let imagePath = require("../images/푸앙_윙크.png");

const ModifyProfile = () => {
  const route = useRoute<any>();
  const {
    clubId,
    loggedId,
    club,
  }: { clubId: number; loggedId: string; club: Club } = route.params;
  const [mClub, setMClub] = useState<Club>(club);
  const [newLeader, setNewLeader] = useState<string>("");
  const navigation = useNavigation<any>();

  const keywords = club?.keyword.map((keyword, idx) => {
    return (
      <Keyword
        key={idx}
        keyword={keyword}
        touchable={false}
        onPress={() => {}}
      />
    );
  });

  const submit = useCallback(() => {
    if (newLeader === "" || newLeader === mClub.leaderId) {
      customAxios
        .patch(
          `/${loggedId}/${clubId}?name=${mClub.name}&introduction=${mClub.introduction}&leaderId=${mClub.leaderId}&picture=${mClub.picture}&keyword=${mClub.keyword}`
        )
        .then((response) => {
          if (response.data) {
            Alert.alert("수정이 완료되었습니다.");
            navigation.goBack();
          }
        })
        .catch((error) =>
          console.log(
            "수정 실패 : ",
            `/${loggedId}/${clubId}?name=${mClub.name}&introduction=${mClub.introduction}&leaderId=${mClub.leaderId}&picture=${mClub.picture}&keyword=${mClub.keyword}`,
            error
          )
        );
    } else {
      console.log(newLeader);
      customAxios
        .patch(`/${loggedId}/${clubId}/changeLeaderId?newLeaderId=${newLeader}`)
        .then((response) => {
          if (response.data) {
            Alert.alert("수정 및 위임이 완료되었습니다.");
            navigation.goBack();
          } else {
            Alert.alert(
              "수정 불가",
              "위임할 회장의 아이디는 동아리의 부원이어야합니다"
            );
          }
        })
        .catch((error) =>
          console.log(
            "수정 실패",
            `/${loggedId}/${clubId}?newLeaderId=${newLeader}`,
            error
          )
        );
    }
  }, [mClub, newLeader]);

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, height: 100, flexDirection: "row" }}>
          <View style={{ width: "80%", flexDirection: "column" }}>
            <View style={{ height: 65, flexDirection: "row" }}>
              <Text style={ProfilePageStyle.profileList}>동아리 프로필</Text>
              <TouchableHighlight
                style={ProfilePageStyle.chatButton}
                onPress={() => {
                  customAxios
                    .delete(`${loggedId}/${clubId}`)
                    .then((response) => {
                      if (response.data) {
                        Alert.alert("동아리가 성공적으로 삭제되었습니다. ");
                        navigation.reset({ routes: [{ name: "Profile" }] });
                      }
                    })
                    .catch((error) => console.log("club deletion", error));
                }}
              >
                <Text style={{ color: "white", fontWeight: "900" }}>
                  동아리 삭제
                </Text>
              </TouchableHighlight>
            </View>
            <View style={{ height: 35, flexDirection: "row" }}>
              <View style={{ width: "40%" }}>
                <TouchableHighlight
                  style={ProfilePageStyle.modifyProfile}
                  onPress={submit}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "900",
                      margin: 5,
                    }}
                  >
                    수정 완료
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={{ width: "60%", alignItems: "flex-end" }}>
                <Text style={ProfilePageStyle.puang}>
                  우리 동아리를 소개합니다앙~!
                </Text>
              </View>
            </View>
          </View>
          <View style={{ width: "20%" }}>
            <Image style={{ width: 72, height: 100 }} source={imagePath} />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomWidth: 0.5,
            borderColor: "#444",
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <View style={{ flex: 1, height: 230, flexDirection: "row" }}>
          <View
            style={{
              width: "50%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%", height: 170, alignItems: "center" }}>
              <View style={ProfilePageStyle.profile}>
                <TouchableHighlight>
                  <Image
                    style={{ width: 150, height: 150, borderRadius: 100 }}
                    source={club?.picture ? { uri: club?.picture } : imagePath}
                  />
                </TouchableHighlight>
              </View>
            </View>
            <View
              style={{
                width: 100,
                height: 60,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 15, color: "black" }}>프로필 사진</Text>
              <Text style={{ fontSize: 9, color: "black" }}>
                수정하려면 사진을 누르세요
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, width: "50%", flexDirection: "column" }}>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black" }}>동아리명 수정</Text>
                <TextInput
                  style={{ fontSize: 15 }}
                  placeholder={"동아리명 입력"}
                  value={mClub.name}
                  onChangeText={(text) => {
                    setMClub((mc) => {
                      return { ...mc, name: text };
                    });
                  }}
                />
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black", marginTop: 5 }}>
                  소속 캠퍼스
                </Text>
                <Text style={{ fontSize: 15 }}>{mClub.department} </Text>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black", marginTop: 5 }}>
                  동아리 분류
                </Text>
                <Text style={{ fontSize: 15 }}>{mClub.type} </Text>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black", marginTop: 5 }}>
                  위임할 동아리장 아이디
                </Text>
                <TextInput
                  style={{ fontSize: 15 }}
                  placeholder={"유지하려면 비워두세요"}
                  autoCapitalize="none"
                  onChangeText={(text) => {
                    setNewLeader(text);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomWidth: 0.5,
            borderColor: "#444",
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <View style={{ height: 150 }}>
          <View style={{ height: 50 }}>
            <Text
              style={{
                color: "black",
                fontSize: 17,
                fontWeight: "900",
                margin: 10,
              }}
            >
              동아리 소개 수정
            </Text>
          </View>
          <View style={ProfilePageStyle.introduction}>
            <TextInput
              style={{ color: "black" }}
              multiline={true}
              placeholder={"동아리에 대해 소개해주세요!"}
              value={mClub.introduction}
              onChangeText={(text) => {
                setMClub((mc) => {
                  return { ...mc, introduction: text };
                });
              }}
            />
          </View>
        </View>
        <View style={ProfilePageStyle.keywordList}>{keywords}</View>
        <View
          style={{
            width: "100%",
            borderBottomWidth: 0.5,
            borderColor: "#444",
            marginTop: 5,
            marginBottom: 5,
          }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ModifyProfile;
