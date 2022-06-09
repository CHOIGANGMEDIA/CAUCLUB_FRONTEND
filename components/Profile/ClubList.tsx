/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight } from "react-native";
import InitialStlye from "../Style/InitialStyle";
import ProfileStyle from "../Style/ProfileStyle";
import Profile from "./Profile";
import { SafeAreaView } from "../navigation/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customAxios } from "../../src/axiosModule/customAxios";
import { NavigationHeader } from "../navigation/NavigationHeader";
import { useNavigation } from "@react-navigation/native";

const ClubList = () => {
  const [id, setId] = useState<string>();
  const [clubIds, setClubIds] = useState<number[]>();

  useEffect(() => {
    AsyncStorage.getItem("loggedId")
      .then((result) => {
        if (result) setId(result);
      })
      .then(() => {});
  }, []);

  useEffect(() => {
    if (id) {
      customAxios
        .get(`/${id}/club`)
        .then((response) => {
          setClubIds(response.data);
          console.log("joined", response.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
    return () => setClubIds([]);
  }, [id]);

  const profileClubList = clubIds?.map((clubId, i) => {
    return <Profile key={i} memberId={id} clubId={clubId} />;
  });

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <View style={ProfileStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>우리 학과 동아리</Text>
        <TouchableHighlight
          style={ProfileStyle.recommendClubView}
          onPress={() => navigation.navigate("RecommendClubList")}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: "900" }}>
            동아리 추천 받기
          </Text>
        </TouchableHighlight>
      </View>
      <View
        style={{ width: "100%", borderBottomWidth: 0.5, borderColor: "#444" }}
      />
      <KeyboardAwareScrollView>{profileClubList}</KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ClubList;
