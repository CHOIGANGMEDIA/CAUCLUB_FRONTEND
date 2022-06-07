/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight, ScrollView } from "react-native";
import InitialStlye from "../Style/InitialStyle";
import ProfileStyle from "../Style/ProfileStyle";
import Profile from "./Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customAxios } from "../../src/axiosModule/customAxios";
import { NavigationHeader } from "../navigation/NavigationHeader";
import { SafeAreaView } from "../navigation/SafeAreaView";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const ProfileList = () => {
  const [id, setId] = useState<string>();
  const [clubIds, setClubIds] = useState<number[]>();
  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();

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
        .get(`/${id}/joinedClub`)
        .then((response) => {
          setClubIds(response.data);
          console.log("joined", response.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
    return () => setClubIds([]);
  }, [isFocused, id]);

  const profileClubList = clubIds?.map((clubId, i) => {
    return <Profile key={i} memberId={id} clubId={clubId} />;
  });

  return (
    <SafeAreaView>
      <NavigationHeader />
      <View style={ProfileStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>내 동아리</Text>
        <View style={{ marginLeft: 30 }}>
          <TouchableHighlight
            style={ProfileStyle.newClub}
            onPress={() =>
              navigation.navigate("GenerateClub", { loggedId: id })
            }
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: "900" }}>
              동아리 생성
            </Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={ProfileStyle.newClubView}
          onPress={() => {
            navigation.navigate("OtherClubs");
          }}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: "900" }}>
            다른 동아리 보기
          </Text>
        </TouchableHighlight>
      </View>
      <View
        style={{ width: "100%", borderBottomWidth: 0.5, borderColor: "#444" }}
      />
      <ScrollView>{profileClubList}</ScrollView>
    </SafeAreaView>
  );
};

export default ProfileList;
