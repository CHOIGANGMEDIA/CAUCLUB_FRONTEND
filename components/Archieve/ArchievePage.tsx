/* eslint-disable prettier/prettier */
import React, { useLayoutEffect, useState } from "react";
import ArchieveStyle from "../Style/ArchieveStyle";
import { View, Text, TouchableHighlight, Image, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcon as Icon } from "../navigation/MaterialCommunityIcon";
import ArchivePost from "./ArchieveList";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { customAxios } from "../../src/axiosModule/customAxios";
import { useCallback } from "react";

let imagePath = require("../images/푸앙_윙크.png");

{
  /* 전체 height: 81% 혹은 572, 전체 width: 360*/
}

type ArchivePageProps = {
  archiveId: number;
  role: number;
  clubId: number;
};

type ArchivePost = {
  title: string;
  contents: string;
  pictures: string[];
  time: string;
  like: number;
  clubName: string;
  isMutual: boolean;
  userLiked: boolean;
};

export type { ArchivePost, ArchivePageProps };

const ArchievePage = ({ archiveId, role, clubId }: ArchivePageProps) => {
  const navigation = useNavigation<any>();
  const [post, setPost] = useState<ArchivePost>();
  const [imageList, setImageList] = useState<string[]>([]);
  const isFocused = useIsFocused();
  useLayoutEffect(() => {
    customAxios
      .get(`/archive/${archiveId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [isFocused]);

  useEffect(() => {
    console.log(post);
    if (post?.pictures) setImageList(post.pictures);
  }, [post]);

  const imageListComps = imageList.map((url, i) => {
    return (
      <Image
        key={i}
        style={ArchieveStyle.archieveImage}
        source={{ uri: url }}
      ></Image>
    );
  });

  const modifyPressed = useCallback(() => {
    navigation.navigate("ArchiveModify", { archiveId: archiveId, post: post });
  }, []);

  const deletePressed = useCallback(() => {
    customAxios
      .delete(`/archive/${archiveId}`)
      .then((response) => {
        if (response.data) {
          Alert.alert("아카이브 글이 삭제되었습니다");
          setPost(undefined);
          navigation.reset({ routes: [{ name: "Archive" }] });
          //navigation.navigate("Archive", {});
        }
      })
      .catch((error) => console.log("삭제 오류", error));
  }, []);

  const liked = useCallback(() => {
    customAxios
      .post(`/archive/${archiveId}/like`)
      .then((response) => {
        setPost((p: any) => {
          return {
            ...p,
            userLiked: response.data,
            like: p.like + (response.data ? 1 : -1),
          };
        });
      })
      .catch((error) => console.log("like :", error));
  }, [post]);

  return (
    <KeyboardAwareScrollView style={{ flex: 0 }}>
      <View style={{ height: 60, flexDirection: "row" }}>
        <View
          style={{ width: 60, alignItems: "center", justifyContent: "center" }}
        >
          <View style={ArchieveStyle.profile}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={imagePath}
            ></Image>
          </View>
        </View>
        <View
          style={{
            width: 150,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={ArchieveStyle.clubName}>{post?.clubName}</Text>
        </View>
        <View
          style={{
            width: 150,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {role === 3 ? (
            <View
              style={{
                width: 150,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableHighlight
                style={ArchieveStyle.modifyButton}
                onPress={modifyPressed}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "900" }}
                >
                  수정
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={ArchieveStyle.deleteButton}
                onPress={deletePressed}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "900" }}
                >
                  삭제
                </Text>
              </TouchableHighlight>
            </View>
          ) : null}
        </View>
      </View>
      <ScrollView horizontal={true} style={ArchieveStyle.archieveImage}>
        {imageListComps}
      </ScrollView>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* TODO Icon 클릭 전환 heart:heart-outline*/}
        <Icon
          name={post?.userLiked ? "heart" : "heart-outline"}
          size={40}
          style={[
            ArchieveStyle.heart,
            post?.userLiked ? { color: "#FD1D1D" } : {},
          ]}
          onPress={liked}
        />
        <Text style={ArchieveStyle.likes}>좋아요 {post?.like}개</Text>
      </View>
      <View style={{ flex: 0 }}>
        <Text style={ArchieveStyle.titleFont}>{post?.title}</Text>
      </View>
      <View style={ArchieveStyle.contentArea}>
        <Text style={ArchieveStyle.contentFont}>{post?.contents}</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ArchievePage;
