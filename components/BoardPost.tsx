import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import BoardStyle from './Style/BoardStyle';

type PostProps = {
  clubName: string;
  title: string;
  contents: string;
};

export type {PostProps};

const BoardPost = ({clubName, title, contents}: PostProps) => {
  return (
    <TouchableHighlight style={BoardStyle.boardList}>
      <View style={{width: '100%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={BoardStyle.clubName}>{clubName}</Text>
        </View>
        <Text style={BoardStyle.title}>{title}</Text>
        <Text style={BoardStyle.content}>{contents}</Text>
        <View
          style={{
            width: '95%',
            borderBottomWidth: 0.5,
            borderColor: '#444',
            padding: 4,
            marginLeft: 10,
          }}
        />
      </View>
    </TouchableHighlight>
  );
};

export default BoardPost;
