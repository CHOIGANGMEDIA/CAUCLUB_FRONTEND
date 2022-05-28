/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';
import {customAxios} from '../src/axiosModule/customAxios';
import {useNavigation} from '@react-navigation/native';
import BoardListEntity from './BoardListEntity';

type PostProps = {
  postId: number;
  clubName: string;
  title: string;
  contents: string;
  time?: string;
};
export type {PostProps};

const BoardList = () => {
  const [posts, setPosts] = useState<PostProps[]>();

  const navigation = useNavigation<any>();
  const openScreen = useCallback(
    ({postId, clubName, title, contents}: PostProps) => {
      // console.log(postId, clubName, title, contents);
      navigation.navigate('BoardScreen', {
        postId: postId,
        clubName: clubName,
        title: title,
        contents: contents,
      });
    },
    [],
  );

  useEffect(() => {
    customAxios
      .get('/post')
      .then(result => {
        setPosts(result.data);
      })
      .catch(error => {
        Alert.alert(`${error}`);
      });
  }, []);

  const postList = posts?.map(({postId, clubName, title, contents}) => {
    return (
      <TouchableHighlight
        key={postId}
        style={BoardStyle.boardList}
        onPress={() => openScreen({postId, clubName, title, contents})}>
        <BoardListEntity
          clubName={clubName}
          title={title}
          contents={contents}
        />
      </TouchableHighlight>
    );
  });

  return (
    <>
      <View style={InitialStlye.titleBox}>
        <Text style={InitialStlye.title}>CAUCLUB</Text>
      </View>
      <View style={BoardStyle.topBox}>
        <Text style={BoardStyle.boardTitle}>게시판</Text>
        <TouchableHighlight style={BoardStyle.newContent}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: '900'}}>
            글쓰기
          </Text>
        </TouchableHighlight>
      </View>
      <View
        style={{width: '100%', borderBottomWidth: 0.5, borderColor: '#444'}}
      />

      <KeyboardAwareScrollView>{postList}</KeyboardAwareScrollView>
      <View style={InitialStlye.bottomBox}>
        <Text style={{padding: 20}}>icon</Text>
        <Text style={{padding: 20}}>icon</Text>
        <Text style={{padding: 20}}>icon</Text>
        <Text style={{padding: 20}}>icon</Text>
        <Text style={{padding: 20}}>icon</Text>
      </View>
    </>
  );
};

export default BoardList;
