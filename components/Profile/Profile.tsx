/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { customAxios } from "../../src/axiosModule/customAxios";
import ProfileStyle from "../Style/ProfileStyle";
import type { Club } from "./Club";

const imagePath = require("../images/푸앙_응원.png");

type ProfileProps = {
  memberId?: string;
  clubId: number;
};

// TODO css - 동아리 타입 이상해여
const Profile = ({ memberId, clubId }: ProfileProps) => {
  const [club, setClub] = useState<Club>();

  const navigation = useNavigation<any>();

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

  return (
    <TouchableHighlight
      style={{ borderWidth: 1, borderColor: "black", margin: 5 }}
      onPress={() =>
        navigation.navigate("ProfilePage", {
          clubId: clubId,
          loggedId: memberId,
        })
      }
    >
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
          <Text style={ProfileStyle.classifyClub}>{club?.type}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Profile;
