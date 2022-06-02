/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, Image, TouchableHighlight, Alert } from "react-native";
import InitialStlye from "../Style/InitialStyle";
import ProfilePageStyle from "../Style/ProfilePageStyle";
import Keyword from "./Keyword";
import Archieve from "./Archieve";
import { SafeAreaView } from "../navigation/SafeAreaView";
import { NavigationHeader } from "../navigation/NavigationHeader";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Club } from "./Club";
import { customAxios } from "../../src/axiosModule/customAxios";

let imagePath = require("../images/푸앙_윙크.png");

const ProfilePage = () => {
  const route = useRoute<any>();
  const { clubId, loggedId } = route.params;
  const [club, setClub] = useState<Club>();
  const [leaderName, setLeaderName] = useState<string>();
  const [myRole, setMyRole] = useState<number>();
  const [actionText, setActionText] = useState<string>();
  const isFocused = useIsFocused();

  useEffect(() => {
    customAxios
      .get(`/club/${clubId}`)
      .then((response) => setClub(response.data))
      .catch((error) => console.log(error));
    return setClub(undefined);
  }, [isFocused]);

  useEffect(() => {
    if (club) {
      customAxios
        .get(`/member/${club?.leaderId}`)
        .then((response) => {
          setLeaderName(response.data.name.trim());
        })
        .catch((error) => console.log(error));
      console.log(`/${loggedId}/${clubId}/enterValid`);
      customAxios
        .get(`/${loggedId}/${clubId}/enterValid`)
        .then((response) => {
          setMyRole(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }

    return setLeaderName(undefined);
  }, [club]);

  const enterClub = useCallback(() => {
    customAxios
      .post(`${loggedId}/${clubId}/enterClub`)
      .then((response) => {
        if (response.data) {
          Alert.alert("가입이 완료되었습니다");
          setMyRole(2);
        } else Alert.alert("가입 실패 관리자에게 문의하세요");
      })
      .catch((error) => console.log(error));
  }, []);

  const resignCLub = useCallback(() => {
    customAxios
      .post(`${loggedId}/${clubId}/resignClub`)
      .then((response) => {
        if (response.data) {
          Alert.alert("탈퇴가 완료되었습니다");
          setMyRole(1);
        } else Alert.alert("탈퇴 실패 관리자에게 문의하세요");
      })
      .catch((error) => console.log(error));
  }, []);

  const navigation = useNavigation<any>();

  const modifyClub = useCallback(() => {
    navigation.navigate("ModifyProfile", {
      clubId: clubId,
      loggedId: loggedId,
      club: club,
    });
  }, [club]);

  useEffect(() => {
    switch (myRole) {
      case 0:
        setActionText("가입 불가");
        break;
      case 1:
        setActionText("가입");
        break;
      case 2:
        setActionText("탈퇴");
        break;
      case 3:
        setActionText("프로필 수정");
        break;
    }
  }, [myRole]);

  const writingView = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 30,
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <View style={{ height: 40, width: 150 }}>
          <TouchableHighlight
            style={ProfilePageStyle.generateButton}
            onPress={() => {
              navigation.navigate("GenerateArchieve", {
                clubId: clubId,
                loggedId: loggedId,
              });
            }}
          >
            <Text style={{ color: "white", fontWeight: "900", margin: 5 }}>
              아카이브 글쓰기
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ height: 40, width: 150 }}>
          <TouchableHighlight style={ProfilePageStyle.generateButton}>
            <Text style={{ color: "white", fontWeight: "900", margin: 5 }}>
              게시판 글쓰기
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  const keywords = club?.keyword.map((keyword, idx) => {
    return <Keyword key={idx} keyword={keyword} />;
  });

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, height: 100, flexDirection: "row" }}>
          <View style={{ width: "80%", flexDirection: "column" }}>
            <View style={{ height: 65 }}>
              <Text style={ProfilePageStyle.profileList}>동아리 프로필</Text>
            </View>
            <View style={{ height: 35, flexDirection: "row" }}>
              <View style={{ width: "40%" }}>
                {/* 가입 / 탈퇴 / 수정 버튼 */}
                <TouchableHighlight
                  style={[
                    ProfilePageStyle.modifyProfile,
                    myRole === 0 ? { backgroundColor: "#808080" } : {},
                  ]}
                  onPress={
                    myRole === 1
                      ? enterClub
                      : myRole === 2
                      ? resignCLub
                      : myRole === 3
                      ? modifyClub
                      : () => {}
                  }
                >
                  <Text
                    style={{ color: "white", fontWeight: "900", margin: 5 }}
                  >
                    {actionText}
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
        {myRole == 3 ? writingView() : null}
        <View style={{ flex: 1, height: 230, flexDirection: "row" }}>
          <View
            style={{
              width: "50%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%", height: 170, alignItems: "center" }}>
              <Image
                style={ProfilePageStyle.profile}
                source={club?.picture ? { uri: club.picture } : imagePath}
              />
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
            </View>
          </View>
          <View style={{ flex: 1, width: "50%", flexDirection: "column" }}>
            <View style={{ height: "25%" }}>
              <View style={{ height: "50%" }}>
                <Text style={{ color: "black" }}>동아리명</Text>
                <Text style={ProfilePageStyle.information}>{club?.name}</Text>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "50%" }}>
                <Text style={{ color: "black" }}>소속 캠퍼스</Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontWeight: "900",
                    margin: 3,
                    marginTop: 5,
                  }}
                >
                  {club?.department}
                </Text>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "50%" }}>
                <Text style={{ color: "black" }}>동아리 분류</Text>
                <Text style={ProfilePageStyle.information}>{club?.type}</Text>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "50%" }}>
                <Text style={{ color: "black" }}>동아리장 이름</Text>
                <Text style={ProfilePageStyle.information}>{leaderName}</Text>
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
              동아리 소개
            </Text>
          </View>
          <View style={ProfilePageStyle.introduction}>
            <Text style={{ color: "black" }}>{club?.introduction}</Text>
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
        <View>
          <View style={{ height: 50 }}>
            <Text
              style={{
                color: "black",
                fontSize: 17,
                fontWeight: "900",
                margin: 10,
              }}
            >
              동아리 아카이브 기록
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {/* TODO <Archieve /> iteration*/}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
