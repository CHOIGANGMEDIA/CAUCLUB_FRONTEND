/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import { customAxios } from "../../src/axiosModule/customAxios";
import { NavigationHeader } from "../navigation/NavigationHeader";
import { SafeAreaView } from "../navigation/SafeAreaView";
import InitialStlye from "../Style/InitialStyle";
import RankingStyle from "../Style/RankingStyle";
import RankProfile from "./RankProfile";

let imagePath = require("../images/푸앙_응원.png");

// 동아리 type
// 0 : 전체
// 1 : 학술
// 2 : 예체능
// 3 : 기타

const Ranking = () => {
  const route = useRoute<any>();
  const [selectedType, setSelectedtype] = useState<number>(0);
  const isFocused = useIsFocused();
  const [clubList, setClubList] = useState<number[]>([]);
  const [loggedId, setLoggedId] = useState<string>("");

  const navigation = useNavigation<any>();

  // initial Loading
  useEffect(() => {
    if (isFocused) {
      customAxios.get(`/rank/${selectedType}`).then(async (response) => {
        setClubList(response.data);
      });
    }
    return setClubList([]);
  }, [isFocused, selectedType]);

  AsyncStorage.getItem("loggedId").then((result) => {
    if (result !== null) {
      setLoggedId(result);
    } else {
      Alert.alert("다시 로그인 해 주세요");
      navigation.reset({ routes: [{ name: "LoginScreen" }] });
    }
  });

  const rankProfiles = clubList?.map((clubId, idx) => {
    return (
      <RankProfile
        key={clubId}
        rank={idx + 1}
        clubId={clubId}
        loggedId={loggedId}
      />
    );
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationHeader />
      <View
        style={{
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={InitialStlye.boardTitle}>랭킹</Text>
        <View
          style={{
            width: 300,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, marginRight: 5 }}>
            우리 동아리는 몇 등인지 볼까앙
          </Text>
          <Image
            style={{ width: 60, height: 60, marginRight: 10 }}
            source={imagePath}
          />
        </View>
      </View>
      <View style={{ height: "87%", width: "90%", margin: "5%" }}>
        <View style={{ height: 40, width: "100%", flexDirection: "row" }}>
          <TouchableHighlight
            style={
              selectedType == 0
                ? RankingStyle.tappedButton
                : RankingStyle.untappedButton
            }
            onPress={() => setSelectedtype(0)}
          >
            <Text style={RankingStyle.fontStyle}>전체</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              selectedType == 1
                ? RankingStyle.tappedButton
                : RankingStyle.untappedButton
            }
            onPress={() => setSelectedtype(1)}
          >
            <Text style={RankingStyle.fontStyle}>학술</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              selectedType == 2
                ? RankingStyle.tappedButton
                : RankingStyle.untappedButton
            }
            onPress={() => setSelectedtype(2)}
          >
            <Text style={RankingStyle.fontStyle}>예체능</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              selectedType == 3
                ? RankingStyle.tappedButton
                : RankingStyle.untappedButton
            }
            onPress={() => setSelectedtype(3)}
          >
            <Text style={RankingStyle.fontStyle}>기타</Text>
          </TouchableHighlight>
        </View>
        <ScrollView
          style={{
            height: "92%",
            width: "100%",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: "#143365",
          }}
        >
          {rankProfiles}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Ranking;
