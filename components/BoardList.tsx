/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableHighlight, Alert } from "react-native";
import InitialStlye from "./Style/InitialStyle";
import BoardStyle from "./Style/BoardStyle";
import { customAxios } from "../src/axiosModule/customAxios";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import BoardListEntity from "./BoardListEntity";
import TopBox from "./TopBox";
import { NavigationHeader } from "./navigation/NavigationHeader";
import { SafeAreaView } from "./navigation/SafeAreaView";

type PostProps = {
  postId: number;
  clubName: string;
  title: string;
  clubId: number;
  contents: string;
  time?: string;
};
export type { PostProps };

const BoardList = () => {
  const [posts, setPosts] = useState<PostProps[]>();
  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();
  const openScreen = useCallback(
    ({ postId, clubName, clubId, title, contents }: PostProps) => {
      // console.log(postId, clubName, title, contents);
      navigation.navigate("BoardScreen", {
        postId: postId,
        clubId: clubId,
        clubName: clubName,
        title: title,
        contents: contents,
      });
    },
    []
  );

  useEffect(() => {
    customAxios
      .get("/post")
      .then((result) => {
        setPosts(result.data.reverse());
      })
      .catch((error) => {
        Alert.alert(`${error}`);
      });

    return setPosts([]);
  }, [isFocused]);

  const postList = posts?.map(
    ({ postId, clubName, clubId, title, contents }) => {
      return (
        <TouchableHighlight
          key={postId}
          style={BoardStyle.boardList}
          onPress={() =>
            openScreen({ postId, clubName, clubId, title, contents })
          }
        >
          <BoardListEntity
            clubName={clubName}
            title={title}
            contents={contents}
          />
        </TouchableHighlight>
      );
    }
  );

  return (
    <SafeAreaView>
      <NavigationHeader />
      <View style={BoardStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>게시판</Text>
      </View>
      <View
        style={{ width: "100%", borderBottomWidth: 0.5, borderColor: "#444" }}
      />

      <KeyboardAwareScrollView>{postList}</KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BoardList;
