/* eslint-disable prettier/prettier */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
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
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcon as Icon } from "./navigation/MaterialCommunityIcon";
import crypto from "crypto";
import Keyword from "./Profile/Keyword";

let imagePath = require("./images/푸앙_의복야구점퍼.png");

const MyPage = () => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [validEmail, setValidEmail] = useState<Boolean>(true);
  const [emailMsg, setEmailMsg] = useState<string>();
  const [password, setPassword] = useState<string>("");
  const [repassMsg, setRepassMsg] = useState<string>();
  const [valid, setValid] = useState<boolean>();
  const [keyword, setKeyword] = useState<string[]>([]);
  const [keywordComps, setKeywordComps] = useState<JSX.Element[]>([]);
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
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
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
            setKeyword([]);
            setKeyword(response.data.keyword);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    loadData();
  }, [isFocused]);

  useLayoutEffect(() => {
    setKeywordComps((kc) => {
      return everyKeywords.map((kw, i) => {
        console.log(keyword.includes(kw));
        return (
          <Keyword
            key={i}
            keyword={kw}
            sel={keyword.includes(kw)}
            onPress={() => {
              setKeyword((k) => {
                if (!k.includes(kw)) {
                  return [...k, kw];
                }
                const ret = k;
                ret.splice(ret.indexOf(kw), 1);
                return ret;
              });
              console.log(keyword);
            }}
          />
        );
      });
    });
  }, [id, keyword]);

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
    console.log("a");
    if (password !== "") {
      if (!valid) Alert.alert("비밀번호가 일치하지 않습니다");
      else {
        crypto.randomBytes(64, (err, buf) => {
          crypto.pbkdf2(password, buf, 10000, 64, "sha512", (err, key) => {
            const data = JSON.stringify({
              password: key.toString("base64"),
              salt: buf.toString("base64"),
              memberId: id,
            });
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
              data: data,
            };
            customAxios
              .post(`/member/resetPassword`, data, config)
              .then((response) => {
                console.log("b");
                if (response.data) {
                  if (validEmail) {
                    console.log("c");
                    customAxios
                      .post(
                        `/member/${id}?name=${name}&email=${email}&keyword=${keyword}`
                      )
                      .then((res) => {
                        console.log("d");
                        if (res.data) {
                          Alert.alert(
                            "수정 성공",
                            "회원 정보가 수정되었습니다"
                          );
                          navigation.reset({
                            routes: [{ name: "LoginScreen" }],
                          });
                        }
                      })
                      .catch((error) => {
                        Alert.alert("오류 발생", error);
                      });
                  } else Alert.alert("실패", "이름과 이메일을 확인해 주세요");
                }
              })
              .catch((error) => {
                Alert.alert(`Error : ${error}\n관리자에게 문의하세요`);
              });
          });
        });
      }
    } else if (validEmail) {
      customAxios
        .post(`/member/${id}?name=${name}&email=${email}&keyword=${keyword}`)
        .then((result) => {
          if (result.data) {
            Alert.alert("수정 성공", "회원 정보가 수정되었습니다");
            navigation.goBack();
          }
        })
        .catch((error) => {
          Alert.alert("오류 발생", error);
        });
    } else Alert.alert("실패", "비밀번호를 확인해주세요");
  };

  const goBack = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
  }, []);

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
            <Text style={[Style.appTitle, { marginRight: 90 }]}>My Page</Text>
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
              개인정보 수정!{" "}
            </Text>
          </View>
          <View style={[{ margin: 10 }]} />
          <Text style={Style.textStyle}>비밀번호 재설정</Text>
          <TextInput
            style={Style.boxStyle}
            placeholder={"비밀번호를 유지하시려면 비워두세요"}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(text: string) => {
              setPassword(text);
            }}
          ></TextInput>
          <Text style={Style.textStyle}>비밀번호 재설정 확인</Text>
          {repassMsg ? (
            <Text style={Style.warnSubStyle}>{repassMsg}</Text>
          ) : null}
          <TextInput
            style={Style.boxStyle}
            placeholder={"비밀번호를 한 번 더 입력하세요"}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(text: string) => {
              repasswordChanged(text);
            }}
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

          <View
            style={{
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {keywordComps}
          </View>

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
          <TouchableOpacity
            onPress={() => {
              customAxios
                .put("member/logout")
                .then((response) => {
                  if (response.data) {
                    Alert.alert("성공적으로 로그아웃되었습니다.");
                    AsyncStorage.setItem("loggedId", "").then(() => {
                      navigation.reset({ routes: [{ name: "LoginScreen" }] });
                    });
                  }
                })
                .catch((error) => console.log("logout: ", error));
            }}
          >
            <Text style={{ margin: 20 }}>로그아웃</Text>
          </TouchableOpacity>
          <Text style={{ margin: 20 }}>|</Text>
          <TouchableOpacity>
            <Text
              style={{ margin: 20 }}
              onPress={() => {
                customAxios
                  .delete("member/withdraw")
                  .then((response) => {
                    if (response.data) {
                      Alert.alert("성공적으로 탈퇴되었습니다.");
                      AsyncStorage.setItem("loggedId", "").then(() => {
                        navigation.reset({ routes: [{ name: "LoginScreen" }] });
                      });
                    }
                  })
                  .catch((error) => console.log("resign: ", error));
              }}
            >
              회원탈퇴
            </Text>
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
