/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, Image } from "react-native";
import InitialStlye from "../Style/InitialStyle";
import ProfileStyle from "../Style/ProfileStyle";
import RecommendProfile from "./RecommendProfile";
import { SafeAreaView } from "../navigation/SafeAreaView";
import { NavigationHeader } from "../navigation/NavigationHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customAxios } from "../../src/axiosModule/customAxios";
import { useNavigation } from "@react-navigation/native";

let imagePath = require("../images/푸앙_기본형.png");

const RecommendClubList = () => {
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
        .get(`/${id}/club/clubRecommend`)
        .then((response) => {
          setClubIds(response.data);
          console.log("rec", response.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
    return () => setClubIds([]);
  }, [id]);

  const recommencClubList = clubIds?.map((clubId, i) => {
    return <RecommendProfile key={i} clubId={clubId} />;
  });

  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <View style={ProfileStyle.imageContainer}>
        <Image style={ProfileStyle.image} source={imagePath} />
        <Text style={ProfileStyle.puang}> 동아리를 추천해볼까앙!!</Text>
      </View>
      <KeyboardAwareScrollView>{recommencClubList}</KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RecommendClubList;
