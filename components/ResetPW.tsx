/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from "react";
import Style from "./Style/Style";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "./navigation/SafeAreaView";
import { useNavigation, useRoute } from "@react-navigation/native";
import crypto from "crypto";
import { customAxios } from "../src/axiosModule/customAxios";

let imagePath = require("./images/푸앙_미소.png");

const ResetPW = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { email } = route.params;
  const [password, setPassword] = useState<string>("");
  const [repassMsg, setRepassMsg] = useState<string>();
  const [valid, setValid] = useState<boolean>();

  const repasswordChanged = useCallback(
    (repassword: string) => {
      if (repassword === undefined || repassword === "") {
        setRepassMsg(undefined);
        setValid(false);
      } else if (repassword !== password) {
        setRepassMsg("비밀번호가 일치하지 않습니다");
        setValid(false);
      } else {
        setRepassMsg("비밀번호가 일치합니다");
        setValid(true);
      }
    },
    [password]
  );

  // TODO 비밀번호 변경 서버 작동 확인
  const submit = () => {
    if (!valid) Alert.alert("비밀번호가 일치하지 않습니다");
    else {
      crypto.randomBytes(64, (err, buf) => {
        crypto.pbkdf2(password, buf, 10000, 64, "sha512", (err, key) => {
          const data = JSON.stringify({
            password: key.toString("base64"),
            salt: buf.toString("base64"),
            email: email,
          });
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };
          customAxios
            .post(`/member/changePassword`, data, config)
            .then((response) => {
              if (response.data) Alert.alert("비밀번호가 변경되었습니다.");
              navigation.reset({ routes: [{ name: "LoginScreen" }] });
            })
            .catch((error) => {
              Alert.alert(`Error : ${error}\n관리자에게 문의하세요`);
            });
        });
      });
    }
  };

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.imageContainer}>
        <Text
          style={{
            left: 1,
            color: "black",
            fontSize: 15,
            fontWeight: "900",
            right: 20,
            fontStyle: "italic",
          }}
        >
          {" "}
          비밀번호를 재설정해주세앙!{" "}
        </Text>
        <Image style={Style.image} source={imagePath} />
      </View>
      <View style={{ margin: 10 }} />
      <Text style={Style.textStyle}>비밀번호 재설정</Text>
      <TextInput
        style={Style.boxStyle}
        placeholder={"새 비밀번호를 입력해주세요"}
        secureTextEntry={true}
        onChangeText={(text: string) => {
          setPassword(text);
        }}
      ></TextInput>
      <Text style={Style.textStyle}>비밀번호 재설정 확인</Text>
      {repassMsg ? <Text style={Style.warnSubStyle}>{repassMsg}</Text> : null}
      <TextInput
        style={Style.boxStyle}
        placeholder={"새 비밀번호를 한 번 더 입력하세요"}
        secureTextEntry={true}
        onChangeText={(text: string) => {
          repasswordChanged(text);
        }}
      ></TextInput>
      <View style={{ margin: 10 }} />
      <View style={Style.center}>
        <TouchableOpacity style={Style.buttonStyle}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "900",
              fontSize: 15,
            }}
            onPress={submit}
          >
            수정하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPW;
