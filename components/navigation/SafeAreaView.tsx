import React from 'react';
import type {FC, ComponentProps} from 'react';
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

export type SafeAreaViewProps = ComponentProps<typeof RNSafeAreaView>;

export const SafeAreaView: FC<SafeAreaViewProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <RNSafeAreaView style={[{flex: 1}, style]} {...props}>
      {children}
    </RNSafeAreaView>
  );
};
