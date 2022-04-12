/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const clubData = [
  {value: '학술동아리'},
  {value: '예체능동아리'},
  {value: '기타동아리'},
];

const test = () => {
  return (
    <View>
      <Dropdown value="1" label="1" data={clubData} />;
    </View>
  );
};

export default test;
