/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { customAxios } from "../../src/axiosModule/customAxios";
import { NavigationHeader } from "../navigation/NavigationHeader";
import { SafeAreaView } from "../navigation/SafeAreaView";
import ArchievePage from "./ArchievePage";
import { Alert } from "react-native";

const ArchieveList = () => {
  const [arcList, setArcList] =
    useState<{ archiveId: number; clubId: number }[]>();
  const [loggedId, setLoggedId] = useState<string>("");
  const isFocused = useIsFocused();
  const [arcPostList, setArcPostList] = useState<JSX.Element[]>([]);
  const navigation = useNavigation<any>();

  const checkRole = async (clubId: number) => {
    const role: number = await (
      await customAxios.get(`/${loggedId}/${clubId}/enterValid`)
    ).data;
    return role;
  };

  useEffect(() => {
    customAxios
      .get("/archive")
      .then((response) => {
        setArcList(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    return setArcList([]);
  }, [isFocused]);

  useEffect(() => {
    AsyncStorage.getItem("loggedId")
      .then((result) => {
        if (result !== null && result !== "") {
          setLoggedId(result);
        } else {
          Alert.alert("다시 로그인 해 주세요");
          navigation.reset({ routes: [{ name: "LoginScreen" }] });
        }
      })
      .then(async () => {
        arcList?.map(async (post, i) => {
          const one = (
            <ArchievePage
              key={i}
              loggedId={loggedId}
              archiveId={post.archiveId}
              role={await checkRole(post.clubId)}
              clubId={post.clubId}
            />
          );
          setArcPostList((before) => {
            return [...before, one];
          });
        });
      });
    return setArcPostList([]);
  }, [arcList]);

  return (
    <SafeAreaView>
      <NavigationHeader />
      <ScrollView style={{ flex: 0 }}>{arcPostList}</ScrollView>
    </SafeAreaView>
  );
};

export default ArchieveList;
