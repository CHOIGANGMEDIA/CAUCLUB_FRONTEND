/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import ProfileStyle from '../Style/ProfileStyle';

type KeywordProps = {
  keyword: string;
};

const Keyword = ({keyword}: KeywordProps) => {
  return (
    <TouchableHighlight style={ProfileStyle.keywordButton}>
      <Text style={ProfileStyle.keyword}>#{keyword}</Text>
    </TouchableHighlight>
  );
};

export default Keyword;
