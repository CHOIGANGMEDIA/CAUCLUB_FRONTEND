/* eslint-disable prettier/prettier */
import React, { useState } from "react";
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
};

const Keyword = ({
  keyword,
  onPress,
  style,
  touchable = true,
}: KeywordProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <TouchableHighlight
      style={[
        selected
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
          setSelected((s) => {
            return !s;
          });
          onPress();
        }
      }}
    >
      <Text
        style={
          selected
            ? {
                color: "white",
                fontSize: 18,
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
