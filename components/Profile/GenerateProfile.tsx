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
import EveryKeywords from "../../data/EveryKeywords";

let imagePath = require("../images/νΈμ_μν¬.png");

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

  const keywordComps = EveryKeywords.map((kw, i) => {
    return (
      <Keyword
        key={i}
        keyword={kw}
        onPress={() => {
          setClub((cl) => {
            if (!cl.keyword.includes(kw))
              return { ...cl, keyword: [...cl.keyword, kw] };
            const ret = cl.keyword;
            ret.splice(ret.indexOf(kw), 1);
            return { ...cl, keyword: ret };
          });
          console.log(club.keyword);
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
    if (image.sourceURL === undefined) image.sourceURL = image.path;
    if (image.sourceURL !== undefined) {
      const data = new FormData();
      if (image.filename === undefined) {
        const splited = image.path.split("/");
        image.filename = splited[splited.length - 1];
      }
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
      Alert.alert("μμ± λΆκ°", "λμλ¦¬ μ΄λ¦μ μλ ₯ν΄μ£ΌμΈμ");
    } else if (club.introduction === "") {
      Alert.alert("μμ± λΆκ°", "λμλ¦¬ μκ°λ₯Ό μμ±ν΄μ£ΌμΈμ");
    } else if (clubSelected) {
      customAxios
        .post(
          `/${loggedId}/newClub?name=${club.name}&department=${club.department}&introduction=${club.introduction}&keyword=${club.keyword}&picture=${club.picture}&type=${club.type}`
        )
        .then((response) => {
          if (response.data) {
            Alert.alert("λμλ¦¬κ° μμ±λμμ΅λλ€.");
            navigation.reset({ routes: [{ name: "Profile" }] });
          }
        });
    } else {
      Alert.alert("μμ± λΆκ°", "λμλ¦¬ λΆλ₯λ₯Ό μ νν΄μ£ΌμΈμ");
    }
  };

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, height: 100, flexDirection: "row" }}>
          <View style={{ width: "80%", flexDirection: "column" }}>
            <View style={{ height: 65 }}>
              <Text style={ProfilePageStyle.profileList}>λμλ¦¬ νλ‘ν</Text>
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
                    λμλ¦¬ λ§λ€κΈ°
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={{ width: "60%", alignItems: "flex-end" }}>
                <Text style={ProfilePageStyle.puang}>
                  μ°λ¦¬ λμλ¦¬λ₯Ό μκ°ν©λλ€μ~!
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
                    <Text>νλ‘ν μ¬μ§ μΆκ°</Text>
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
              <Text style={{ fontSize: 15, color: "black" }}>νλ‘ν μ¬μ§</Text>
            </View>
          </View>
          <View style={{ flex: 1, width: "50%", flexDirection: "column" }}>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black" }}>λμλ¦¬λͺ</Text>
                <TextInput
                  style={{ fontSize: 15 }}
                  placeholder={"λμλ¦¬λͺ μλ ₯"}
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
                  μμ μΊ νΌμ€
                </Text>
                <Text style={{ fontSize: 15 }}> {club.department} </Text>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <View style={{ height: "70%" }}>
                <Text style={{ color: "black", marginTop: 5 }}>
                  λμλ¦¬ λΆλ₯
                </Text>
                <SelectDropdown
                  data={["νμ λμλ¦¬", "μμ²΄λ₯λμλ¦¬", "κΈ°νλμλ¦¬"]}
                  defaultButtonText={"λΆλ₯λ₯Ό μ ννμΈμ"}
                  onSelect={(selectedItem) => {
                    setClub((cl) => {
                      if (selectedItem === "νμ λμλ¦¬") {
                        return { ...cl, type: 1 };
                      }
                      if (selectedItem === "μμ²΄λ₯λμλ¦¬") {
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
                  λμλ¦¬μ₯ μμ΄λ
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
              λμλ¦¬ μκ°
            </Text>
          </View>
          <View style={ProfilePageStyle.introduction}>
            <TextInput
              style={{ color: "black" }}
              multiline={true}
              placeholder={"λμλ¦¬μ λν΄ μκ°ν΄μ£ΌμΈμ!"}
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
