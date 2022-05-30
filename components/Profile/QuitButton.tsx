import React, {useCallback} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {customAxios} from '../../src/axiosModule/customAxios';
import ProfilePageStyle from '../Style/ProfilePageStyle';

const QuitButton = (clubId: number) => {
  const pressed = () =>
    useCallback(() => {
      // TODO 동아리 탈퇴처리
    }, []);

  return (
    <TouchableHighlight style={ProfilePageStyle.registerFalse}>
      <Text style={{color: 'white', fontWeight: '900', margin: 5}}>
        가입하기
      </Text>
    </TouchableHighlight>
  );
};

export default QuitButton;