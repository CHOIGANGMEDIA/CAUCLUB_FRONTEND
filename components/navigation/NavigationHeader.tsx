import React from 'react';
import type {FC, ReactNode} from 'react';
import {
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import InitialStlye from '../Style/InitialStyle';

export type NavigationHeaderProps = {
  title?: string;
  Left?: () => ReactNode;
  Right?: () => ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
};

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  title,
  Left,
  Right,
  viewStyle,
  titleStyle,
}) => {
  return (
    <View style={[styles.view, viewStyle]}>
      <View style={{flex: 1}}>{Left && Left()}</View>
      <Text style={[InitialStlye.title]}>CAUCLUB</Text>
      <View style={{flex: 1}}>{Right && Right()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#6BBEE2',
  },
});
