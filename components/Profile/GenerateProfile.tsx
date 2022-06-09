/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  Alert,
} from "react-native";
import ProfilePageStyle from "../Style/ProfilePageStyle";
import storage from "@react-native-firebase/storage";
import Keyword from "./Keyword";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "../navigation/SafeAreaView";
import { NavigationHeader } from "../navigation/NavigationHeader";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import { customAxios } from "../../src/axiosModule/customAxios";
import SelectDropdown from "react-native-select-dropdown";

let imagePath = require("../images/푸앙_윙크.png");

type rClub = {
  department: string;
  introduction: string;
  keyword: string[];
  leaderId: string;
  name: string;
  picture: string;
  score: number;
  type: number;
};

const GenerateProfile = () => {
  const route = useRoute<any>();
  const { loggedId } = route.params;
  const [club, setClub] = useState<rClub>({
    department: "",
    introduction: "",
    keyword: [],
    leaderId: loggedId,
    name: "",
    picture: "",
    score: 0,
    type: 0,
  });
  const [clubSelected, setClubSelected] = useState<boolean>(false);
  const [everyKeywords, setEveryKeywords] = useState<string[]>([
    "운동",
    "농구",
    "축구",
    "야구",
    "배구",
    "탁구",
    "테니스",
    "골프",
    "배드민턴",
    "자전거",
    "오토바이",
    "미식축구",
    "당구",
    "포켓볼",
    "클라이밍",
    "직관",
    "등산",
    "유도",
    "태권도",
    "검도",
    "복싱",
    "킥복싱",
    "알고리즘",
    "스터디",
    "코딩",
  ]);

  const keywordComps = everyKeywords.map((kw, i) => {
    return (
      <Keyword
        key={i}
        keyword={kw}
        onPress={() => {
          setClub((cl) => {
            return { ...cl, keyword: cl.keyword.concat([kw]) };
          });
        }}
      />
    );
  });

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
          if (url !== undefined) {
            setClub((cl) => {
              return {
                ...cl,
                picture: url,
              };
            });
          }
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    customAxios
      .get(`/member/${loggedId}`)
      .then((response) => {
        setClub((cl) => {
          return {
            ...cl,
            department: response.data.department,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigation = useNavigation<any>();

  const submit = () => {
    console.log(club);
    if (club.name === "") {
      Alert.alert("생성 불가", "동아리 이름을 입력해주세요");
    } else if (club.introduction === "") {
      Alert.alert("생성 불가", "동아리 소개를 작성해주세요");
    } else if (clubSelected) {
      customAxios
        .post(
          `/${loggedId}/newClub?name=${club.name}&department=${club.department}&introduction=${club.introduction}&keyword=${club.keyword}&picture=${club.picture}&type=${club.type}`
        )
        .then((response) => {
          if (response.data) {
            Alert.alert("동아리가 생성되었습니다.");
            navigation.reset({ routes: [{ name: "Profile" }] });
          }
        });
    } else {
      Alert.alert("생성 불가", "동아리 분류를 선택해주세요");
    }
  };

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, height: 100, flexDirection: "row" }}>
          <View style={{ width: "80%", flexDirection: "column" }}>
            <View style={{ height: 65 }}>
              <Text style={ProfilePageStyle.profileList}>동아리 프로필</Text>
            </View>
            <View style={{ height: 35, flexDirection: "row" }}>
              <View style={{ width: "40%" }}>
                <TouchableHighlight
                  style={ProfilePageStyle.modifyProfile}
                  onPress={submit}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: "900",
                      margin: 5,
                    }}
                  >
                    동아리 만들기
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={{ width: "60%", alignItems: "flex-end" }}>
                <Text style={ProfilePageStyle.puang}>
                  우리 동아리를 소개합니다앙~!
                </Text>
              </View>
            </View>
          </View>
          <View style={{ width: "20%" }}>
            <Image style={{ width: 72, height: 100 }} source={imagePath} />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomWidth: 0.5,
            borderColor: "#444",
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <View style={{ flex: 1, height: 230, flexDirection: "row" }}>
          <View
            style={{
              width: "50%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%", height: 170, alignItems: "center" }}>
              {/* <Image style={} source={imagePath} /> */}
              <TouchableHighlight
                onPress={() => {
                  ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true,
                  })
                    .then((image) => {
                      uploadImage(image);
                    })
                    .catch((error) => console.log(error));
                }}
              >
                {club.picture === "" ? (
                  <View style={ProfilePageStyle.profile}>
                    <Text>프로필 사진 추가</Text>
                  </View>
                ) : (
                  <Image
                    style={{ width: 150, height: 150, borderRadius: 100 }}
                    source={{ uri: club.picture }}
                  />
                )}
              </TouchableHighlight>
            </View>
            <View
              style={{
                width: 100,
                height: 60,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 15, color: "black" }}>프로필 사진</Text>
            </View>
          </View>
          <View style={{ flex: 1, width: "50%", flexDirection: "column" }}>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black" }}>동아리명</Text>
                <TextInput
                  style={{ fontSize: 15 }}
                  placeholder={"동아리명 입력"}
                  onChangeText={(text) =>
                    setClub((cl) => {
                      return { ...cl, name: text };
                    })
                  }
                />
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black", marginTop: 5 }}>
                  소속 캠퍼스
                </Text>
                <Text style={{ fontSize: 15 }}> {club.department} </Text>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black", marginTop: 5 }}>
                  동아리 분류
                </Text>
                <SelectDropdown
                  data={["학술동아리", "예체능동아리", "기타동아리"]}
                  defaultButtonText={"분류를 선택하세요"}
                  onSelect={(selectedItem) => {
                    setClub((cl) => {
                      if (selectedItem === "학술동아리") {
                        return { ...cl, type: 1 };
                      }
                      if (selectedItem === "예체능동아리") {
                        return { ...cl, type: 2 };
                      } else {
                        return { ...cl, type: 3 };
                      }
                    });
                    setClubSelected(true);
                  }}
                  buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item) => {
                    return item;
                  }}
                />
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black", marginTop: 5 }}>
                  동아리장 아이디
                </Text>
                <Text style={{ fontSize: 15 }}> {club.leaderId} </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomWidth: 0.5,
            borderColor: "#444",
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <View style={{ height: 150 }}>
          <View style={{ height: 50 }}>
            <Text
              style={{
                color: "black",
                fontSize: 17,
                fontWeight: "900",
                margin: 10,
              }}
            >
              동아리 소개
            </Text>
          </View>
          <View style={ProfilePageStyle.introduction}>
            <TextInput
              style={{ color: "black" }}
              multiline={true}
              placeholder={"동아리에 대해 소개해주세요!"}
              onChangeText={(text) =>
                setClub((cl) => {
                  return { ...cl, introduction: text };
                })
              }
            />
          </View>
        </View>
        <View style={ProfilePageStyle.keywordList}>{keywordComps}</View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default GenerateProfile;
