/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import ArchieveStyle from "../Style/ArchieveStyle";
import {
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CheckBox from "@react-native-community/checkbox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArchivePost } from "./ArchievePage";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import { customAxios } from "../../src/axiosModule/customAxios";
import storage from "@react-native-firebase/storage";
import { SafeAreaView } from "../navigation/SafeAreaView";
import { NavigationHeader } from "../navigation/NavigationHeader";

const ModifyArchieve = () => {
  const route = useRoute<any>();
  const { archiveId, post }: { archiveId: number; post: ArchivePost } =
    route.params;
  const [modPost, setModPost] = useState<ArchivePost>(post);
  const navigation = useNavigation<any>();

  useEffect(() => console.log(modPost), []);

  const getUrl = async (fileName?: string) => {
    let url = "";
    try {
      const imageRef = await storage().ref(fileName);
      url = await imageRef.getDownloadURL();
      console.log("imageUrl:", url);
      return url;
    } catch (e) {
      console.log(e);
    }
  };

  const uploadImage = useCallback((image: ImageOrVideo) => {
    if (image.sourceURL !== undefined) {
      const data = new FormData();
      let file = {
        uri: image.path,
        type: "multipart/form-data",
        name: image.filename,
      };
      data.append("file", file);
      console.log(image);
      const config = { headers: { "content-type": "multipart/form-data" } };
      console.log(data);
      customAxios
        .post(`/files?nameFile=${image.filename}`, data, config)
        .then(async (response) => {
          const url = await getUrl(image.filename);
          if (url !== undefined)
            setModPost((mP) => {
              return { ...mP, pictures: [...mP.pictures, url] };
            });
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const attatchPhoto = (i: number) => {
    return (
      <TouchableHighlight
        key={i}
        style={ArchieveStyle.imageBox}
        onPress={
          i === modPost.pictures.length
            ? () => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true,
                })
                  .then((image) => {
                    uploadImage(image);
                  })
                  .catch((error) => console.log(error));
              }
            : () => {}
        }
      >
        {i === modPost.pictures.length ? (
          <Text style={{ marginTop: 140 }}>사진 첨부</Text>
        ) : (
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: modPost.pictures[i] }}
          />
        )}
      </TouchableHighlight>
    );
  };

  const submit = () => {
    const data = JSON.stringify({
      contents: modPost.contents,
      title: modPost.title,
      isMutual: Number(modPost.isMutual),
      pictures: modPost.pictures,
    });
    console.log(data);
    const config = { headers: { "Content-Type": "application/json" } };
    customAxios
      .patch(`/archive/${archiveId}`, data, config)
      .then((response) => {
        if (response.data) {
          Alert.alert("아카이브 글이 정상적으로 수정되었습니다. ");
          navigation.goBack();
        }
      })
      .catch((error) => console.log("modify submit :", error));
  };

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <ScrollView>
        <View
          style={{
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 22,
              fontWeight: "900",
              fontStyle: "italic",
              marginLeft: 20,
            }}
          >
            ARCHIEVE
          </Text>
          <TouchableHighlight
            style={ArchieveStyle.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "900" }}>
              취소
            </Text>
          </TouchableHighlight>
        </View>
        <TextInput
          style={ArchieveStyle.titleStyle}
          value={modPost.title}
          onChangeText={(t) => {
            setModPost((mP) => {
              return { ...mP, title: t };
            });
          }}
        ></TextInput>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: 30,
          }}
        >
          <CheckBox
            onChange={() =>
              setModPost((md) => {
                return { ...md, isMutual: !md.isMutual };
              })
            }
            value={modPost.isMutual}
          ></CheckBox>
          <Text>다른 동아리와의 교류 활동입니다.</Text>
        </View>
        <KeyboardAwareScrollView style={ArchieveStyle.contentStyle}>
          <TextInput
            multiline={true}
            value={modPost.contents}
            onChangeText={(t) => {
              setModPost((mP) => {
                return { ...mP, contents: t };
              });
            }}
          ></TextInput>
        </KeyboardAwareScrollView>
        {modPost.pictures.map((url, i) => attatchPhoto(i))}
        {attatchPhoto(modPost.pictures.length)}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableHighlight
            style={ArchieveStyle.buttonStyle}
            onPress={submit}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "900",
                fontSize: 15,
              }}
            >
              수정하기
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ModifyArchieve;
