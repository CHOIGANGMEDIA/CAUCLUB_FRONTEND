/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, ScrollView} from 'react-native';
import InitialStlye from '../Style/InitialStyle';
import ProfileStyle from '../Style/ProfileStyle';
import Profile from './Profile';
import AsyncStorage from '@react-native-community/async-storage';
import {customAxios} from '../../src/axiosModule/customAxios';

const ProfileList = () => {
  const [id, setId] = useState<string>('');
  const [clubs, setClubs] = useState<number[]>();

  useEffect(() => {
    AsyncStorage.getItem('loggedId', (err, result) => {
      if (result) setId(result);
    }).then(() => console.log(id));
    customAxios
      .get(`/${id}/club`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <View style={ProfileStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>내 동아리</Text>
        <TouchableHighlight style={ProfileStyle.newClubView}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: '900'}}>
            다른 동아리 보기
          </Text>
        </TouchableHighlight>
      </View>
      <View
        style={{width: '100%', borderBottomWidth: 0.5, borderColor: '#444'}}
      />
      <ScrollView>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </ScrollView>
    </>
  );
};

export default ProfileList;
