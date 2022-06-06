/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { customAxios } from "../../src/axiosModule/customAxios";
import ProfileStyle from "../Style/ProfileStyle";
import { Club } from "./Club";
import ClubList from "./ClubList";
import Keyword from "./Keyword";

type RecommendProfileProps = {
  clubId: number;
};

const imagePath = require("../images/푸앙_응원.png");

const RecommendProfile = ({ clubId }: RecommendProfileProps) => {
  const [club, setClub] = useState<Club>();

  useEffect(() => {
    customAxios
      .get(`/club/${clubId}`)
      .then((response) => {
        setClub(response.data);
        console.log("clubdetail", response.data);
      })
      .catch((error) => console.log(error));
    return setClub(undefined);
  }, []);

  const keywords = club?.keyword.map((keyword, idx) => {
    return <Keyword key={idx} keyword={keyword} onPress={() => {}} />;
  });

  return (
    <TouchableHighlight
      style={{ borderWidth: 1, borderColor: "black", margin: 5 }}
    >
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {club !== undefined ? (
            <Image
              source={club?.picture ? { uri: club.picture } : imagePath}
              style={ProfileStyle.profile}
            />
          ) : (
            <View style={ProfileStyle.profile}></View>
          )}
          <View
            style={{
              flexDirection: "row",
              width: "75%",
              justifyContent: "space-between",
            }}
          >
            <Text style={ProfileStyle.clubName}>{club?.name}</Text>
            <View style={{ marginTop: 20 }}>
              <Text style={ProfileStyle.classifyClub2}>{club?.type}</Text>
              <Text style={ProfileStyle.classifyClub2}>{club?.department}</Text>
            </View>
          </View>
        </View>
        <View style={ProfileStyle.keywordList}>{keywords}</View>
      </>
    </TouchableHighlight>
  );
};

export default RecommendProfile;
