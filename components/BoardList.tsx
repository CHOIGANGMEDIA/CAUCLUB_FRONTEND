/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';
import BoardPost from './BoardPost';
import {customAxios} from '../src/axiosModule/customAxios';
import type {PostProps} from './BoardPost';

const BoardList = () => {
  const [posts, setPosts] = useState<PostProps[]>();

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

  const postList = posts?.map(({clubName, title, contents}) => (
    <BoardPost clubName={clubName} title={title} contents={contents} />
  ));

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
