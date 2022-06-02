/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import Style from "./Style/Style";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customAxios } from "../src/axiosModule/customAxios";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcon as Icon } from "./navigation/MaterialCommunityIcon";

let imagePath = require("./images/푸앙_의복야구점퍼.png");

// TODO css

const MyPage = () => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [validEmail, setValidEmail] = useState<Boolean>(true);
  const [emailMsg, setEmailMsg] = useState<string>();

  const loadData = async () => {
    const loggedId = await AsyncStorage.getItem("loggedId");
    console.log(loggedId);
    if (loggedId) {
      setId(loggedId);
      await customAxios
        .get(`/member/${loggedId}`)
        .then((response) => {
          setName(response.data.name.trim());
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const emailChanged = useCallback(
    (email: string) => {
      const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (email === undefined || email === "") {
        setEmailMsg(undefined);
        setValidEmail(false);
      } else if (emailRegex.test(email)) {
        setValidEmail(true);
        setEmailMsg(undefined);
      } else {
        setEmailMsg("올바른 형식의 이메일을 입력해주세요 ex) example@exam.com");
        setValidEmail(false);
      }
      setEmail(email);
    },
    [email]
  );

  const modifyPressed = () => {
    if (validEmail) {
      customAxios
        .post(`/member/${id}?name=${name}&email=${email}`)
        .then((result) => {
          if (result.data == true)
            Alert.alert("수정 성공", "회원 정보가 수정되었습니다");
        })
        .catch((error) => {
          Alert.alert("오류 발생", error);
        });
    } else Alert.alert("실패", "이름과 이메일을 확인해 주세요");
  };

  const navigation = useNavigation<any>();

  const goBack = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
    console.log("back pressed");
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <KeyboardAwareScrollView style={Style.container}>
        <View style={[{ marginTop: 10 }]}>
          <View style={styles.top}>
            <Icon
              name="chevron-left"
              size={40}
              onPress={goBack}
              style={{ backgroundColor: "transparent" }}
            />
            <Text style={[Style.appTitle, { padding: 0 }]}>My Page</Text>
          </View>
          <View style={Style.imageContainer}>
            <Image style={Style.image} source={imagePath} />
            <Text
              style={[
                {
                  color: "black",
                  fontSize: 20,
                  fontWeight: "900",
                  right: 20,
                  fontStyle: "italic",
                },
              ]}
            >
              {" "}
              뭐라할까{" "}
            </Text>
          </View>
          <View style={[{ margin: 10 }]} />
          <Text style={Style.textStyle}>비밀번호 재설정</Text>
          <TextInput
            style={Style.boxStyle}
            placeholder={"비밀번호를 유지하시려면 비워두세요"}
          ></TextInput>
          <Text style={Style.textStyle}>비밀번호 재설정 확인</Text>
          <TextInput
            style={Style.boxStyle}
            placeholder={"비밀번호를 한 번 더 입력하세요"}
          ></TextInput>
          <Text style={Style.textStyle}>이름</Text>
          <TextInput
            style={Style.boxStyle}
            onChangeText={(text) => setName(text)}
            value={name}
          ></TextInput>
          <Text style={Style.textStyle}>이메일</Text>
          {emailMsg ? <Text style={Style.warnSubStyle}>{emailMsg}</Text> : null}
          <TextInput
            style={Style.boxStyle}
            onChangeText={(text) => emailChanged(text)}
            value={email}
          ></TextInput>

          <View style={[{ margin: 10 }]} />
          <View style={Style.center}>
            <TouchableOpacity style={Style.buttonStyle} onPress={modifyPressed}>
              <Text
                style={[
                  {
                    color: "white",
                    textAlign: "center",
                    fontWeight: "900",
                    fontSize: 15,
                  },
                ]}
              >
                수정하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.lastCenter}>
          <TouchableOpacity>
            <Text style={{ margin: 20 }}>로그아웃</Text>
          </TouchableOpacity>
          <Text style={{ margin: 20 }}>|</Text>
          <TouchableOpacity>
            <Text style={{ margin: 20 }}>회원탈퇴</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#6BBEE2",
  },
});

export default MyPage;
