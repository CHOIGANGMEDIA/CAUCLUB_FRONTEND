import React, { useCallback } from "react";
import type { FC, ReactNode } from "react";
import {
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import InitialStlye from "../Style/InitialStyle";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcon as Icon } from "./MaterialCommunityIcon";

export type NavigationHeaderProps = {
  title?: string;
  Left?: boolean;
  viewStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
};

// TODO 위에도 파랑으로 채우기 - 부모 컴포넌트에서의 문제일 가능성 큼(네비게이터)
// TODO css

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  title,
  Left = false,
  viewStyle,
}) => {
  const navigation = useNavigation<any>();
  const goBack = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
    console.log("back pressed");
  }, []);
  return (
    <View style={[styles.view, viewStyle]}>
      <View style={{ flex: 1 }}>
        {Left ? (
          <Icon
            name="chevron-left"
            size={30}
            onPress={goBack}
            style={{ backgroundColor: "transparent" }}
          />
        ) : null}
      </View>
      <Text style={[InitialStlye.title]}>CAUCLUB</Text>
      <View style={{ flex: 1, alignContent: "flex-end" }}>
        <Icon
          name="account-outline"
          size={24}
          onPress={() => navigation.navigate("MyPage", {})}
          style={{ marginLeft: 40 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "#6BBEE2",
  },
});
