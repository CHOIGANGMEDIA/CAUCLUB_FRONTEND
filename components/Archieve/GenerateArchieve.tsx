/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from "react";
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
import storage from "@react-native-firebase/storage";
import CheckBox from "@react-native-community/checkbox";
import { SafeAreaView } from "../navigation/SafeAreaView";
import { NavigationHeader } from "../navigation/NavigationHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import { customAxios } from "../../src/axiosModule/customAxios";

const GenerateArchieve = () => {
  const route = useRoute<any>();
  const { clubId, loggedId } = route.params;
  const [title, setTitle] = useState<string>("");
  const [isMutual, setIsMutual] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const [contents, setContents] = useState<string>("");
  const [imageUrlList, setImageUrlList] = useState<string[]>([]);

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
      getUrl(image.filename);
      data.append("file", file);
      console.log(image);
      const config = { headers: { "content-type": "multipart/form-data" } };
      console.log(data);
      customAxios
        .post(`/files?nameFile=${image.filename}`, data, config)
        .then(async (response) => {
          const url = await getUrl(image.filename);
          if (url !== undefined)
            setImageUrlList((imgUrlL) => [...imgUrlL, url]);
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
          i === imageUrlList.length
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
        {/* <Image style={({width: 300, height: 300})} source={imagePath} /> */}
        {i === imageUrlList.length ? (
          <Text style={{ marginTop: 140 }}>사진 첨부</Text>
        ) : (
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: imageUrlList[i] }}
          />
        )}
      </TouchableHighlight>
    );
  };

  // TODO body로 다시
  const upload = () => {
    const data = JSON.stringify({
      contents: contents,
      pictureUrls: imageUrlList,
      title: title,
      isMutual: isMutual,
    });
    const config = { headers: { "Content-Type": "application/json" } };
    customAxios
      .post(`/${loggedId}/${clubId}/newArchive?${data}`, config)
      .then((response) => {
        if (response.data) {
          Alert.alert("글이 등록되었습니다");
          navigation.goBack();
        } else Alert.alert("오류");
      })
      .catch((error) => console.log(error));
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
          placeholder={"제목을 입력하세요"}
          onChangeText={(text) => setTitle(text)}
        ></TextInput>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: 30,
          }}
        >
          <CheckBox onChange={() => setIsMutual((v) => !v)}></CheckBox>
          <Text>다른 동아리와의 교류 활동입니다.</Text>
        </View>
        <KeyboardAwareScrollView style={ArchieveStyle.contentStyle}>
          <TextInput
            multiline={true}
            placeholder={"내용을 입력하세요"}
            onChangeText={(text) => setContents(text)}
          ></TextInput>
        </KeyboardAwareScrollView>
        {imageUrlList.map((url, i) => attatchPhoto(i))}
        {attatchPhoto(imageUrlList.length)}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableHighlight
            style={ArchieveStyle.buttonStyle}
            onPress={upload}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "900",
                fontSize: 15,
              }}
            >
              업로드 하기
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GenerateArchieve;
