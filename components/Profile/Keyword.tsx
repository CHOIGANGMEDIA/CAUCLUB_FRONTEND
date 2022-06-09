/* eslint-disable prettier/prettier */
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableHighlight,
  ViewStyle,
} from "react-native";

import ProfileStyle from "../Style/ProfileStyle";

type KeywordProps = {
  keyword: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  touchable?: boolean;
  sel?: boolean;
};

const Keyword = ({
  keyword,
  onPress,
  style,
  touchable = true,
  sel = false,
}: KeywordProps) => {
  const [selected, setSelected] = useState<boolean>(sel);
  const [init, setInit] = useState<boolean>(true);
  useEffect(() => {
    setSelected((s) => {
      return sel;
    });
  }, []);
  return (
    <TouchableHighlight
      style={[
        init
          ? sel
            ? {
                margin: 5,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                backgroundColor: "#143365",
              }
            : ProfileStyle.keywordButton
          : selected
          ? {
              margin: 5,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              backgroundColor: "#143365",
            }
          : ProfileStyle.keywordButton,
        style,
      ]}
      onPress={() => {
        if (touchable) {
          if (init) setInit(false);
          setSelected((s) => {
            return !s;
          });
          onPress();
        }
      }}
    >
      <Text
        style={
          init
            ? sel
              ? {
                  color: "white",
                  fontSize: 12,
                  fontWeight: "900",
                  marginLeft: 3,
                  marginRight: 3,
                }
              : ProfileStyle.keyword
            : selected
            ? {
                color: "white",
                fontSize: 12,
                fontWeight: "900",
                marginLeft: 3,
                marginRight: 3,
              }
            : ProfileStyle.keyword
        }
      >
        #{keyword}
      </Text>
    </TouchableHighlight>
  );
};

export default Keyword;
