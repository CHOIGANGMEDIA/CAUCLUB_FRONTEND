/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, ScrollView} from 'react-native';
import InitialStlye from '../Style/InitialStyle';
import ProfileStyle from '../Style/ProfileStyle';
import Profile from './Profile';
import AsyncStorage from '@react-native-community/async-storage';
import {customAxios} from '../../src/axiosModule/customAxios';
import {NavigationHeader} from '../navigation/NavigationHeader';
import {SafeAreaView} from '../navigation/SafeAreaView';

const ProfileList = () => {
  const [id, setId] = useState<string>('');
  const [clubIds, setClubIds] = useState<number[]>();

  useEffect(() => {
    AsyncStorage.getItem('loggedId', (err, result) => {})
      .then(result => {
        console.log(result);
        if (result) setId(result);
      })
      .then(() => {
        customAxios
          .get(`/${id}/joinedClub`)
          .then(response => {
            console.log('res:', response.data);
            setClubIds(response.data);
            console.log('state:', clubIds);
          })
          .catch(error => {
            console.log(error);
          });
      });
  }, []);

  const profileClubList = clubIds?.map(clubId => {
    return <Profile key={clubId} memberId={id} clubId={clubId} />;
  });

  return (
    <SafeAreaView>
      <NavigationHeader />
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
      <ScrollView>{profileClubList}</ScrollView>
    </SafeAreaView>
  );
};

export default ProfileList;
