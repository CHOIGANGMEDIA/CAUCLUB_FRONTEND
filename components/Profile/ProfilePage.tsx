/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import InitialStlye from '../Style/InitialStyle';
import ProfilePageStyle from '../Style/ProfilePageStyle';
import Keyword from './Keyword';
import Archieve from './Archieve';
import {SafeAreaView} from '../navigation/SafeAreaView';
import {NavigationHeader} from '../navigation/NavigationHeader';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Club} from './Club';
import {customAxios} from '../../src/axiosModule/customAxios';

let imagePath = require('../images/푸앙_윙크.png');

const ProfilePage = () => {
  // TODO useRoute
  const route = useRoute<any>();
  const {clubId} = route.params;
  const [memberId, setMemberId] = useState<string>();
  const [club, setClub] = useState<Club>();
  const [leaderName, setLeaderName] = useState<string>();

  AsyncStorage.getItem('loggedId', (err, result) => {
    setMemberId(result);
  });
  useEffect(() => {
    customAxios
      .get(`/club/${clubId}`)
      .then(response => setClub(response.data))
      .catch(error => console.log(error));

    return setClub(undefined);
  }, [memberId]);

  useEffect(() => {
    customAxios
      .get(`/member/${club?.leaderId}`)
      .then(response => setLeaderName(response.data.name.trim()))
      .catch(error => console.log(error));

    return setLeaderName(undefined);
  }, [club]);

  const actionButton = (id: number) => {
    const pressed = () =>
      useCallback(() => {
        // TODO 동아리 처리
      }, []);
    return (
      <TouchableHighlight style={ProfilePageStyle.registerFalse}>
        <Text style={{color: 'white', fontWeight: '900', margin: 5}}>
          {/* TODO 상황 맞게 */}
        </Text>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <KeyboardAwareScrollView>
        <View style={{flex: 1, height: 100, flexDirection: 'row'}}>
          <View style={{width: '80%', flexDirection: 'column'}}>
            <View style={{height: 65}}>
              <Text style={ProfilePageStyle.profileList}>동아리 프로필</Text>
            </View>
            <View style={{height: 35, flexDirection: 'row'}}>
              <View style={{width: '40%'}}>{/* TODO actionButton() */}</View>
              <View style={{width: '60%', alignItems: 'flex-end'}}>
                <Text style={ProfilePageStyle.puang}>{club?.introduction}</Text>
              </View>
            </View>
          </View>
          <View style={{width: '20%'}}>
            <Image
              style={{width: 72, height: 100}}
              source={club?.picture ? {uri: club.picture} : imagePath}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 0.5,
            borderColor: '#444',
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <View style={{flex: 1, height: 230, flexDirection: 'row'}}>
          <View
            style={{
              width: '50%',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={{width: '100%', height: 170, alignItems: 'center'}}>
              <View style={ProfilePageStyle.profile}>
                <></>
              </View>
            </View>
            <View
              style={{
                width: 100,
                height: 60,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 15, color: 'black'}}>프로필 사진</Text>
            </View>
          </View>
          <View style={{flex: 1, width: '50%', flexDirection: 'column'}}>
            <View style={{height: '25%'}}>
              <View style={{height: '50%'}}>
                <Text style={{color: 'black'}}>동아리명</Text>
                <Text style={ProfilePageStyle.information}>{club?.name}</Text>
              </View>
            </View>
            <View style={{height: '25%'}}>
              <View style={{height: '50%'}}>
                <Text style={{color: 'black'}}>소속 캠퍼스</Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: '900',
                    margin: 3,
                    marginTop: 5,
                  }}>
                  {club?.department}
                </Text>
              </View>
            </View>
            <View style={{height: '25%'}}>
              <View style={{height: '50%'}}>
                <Text style={{color: 'black'}}>동아리 분류</Text>
                <Text style={ProfilePageStyle.information}>{club?.type}</Text>
              </View>
            </View>
            <View style={{height: '25%'}}>
              <View style={{height: '50%'}}>
                <Text style={{color: 'black'}}>동아리장 이름</Text>
                <Text style={ProfilePageStyle.information}>{leaderName}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 0.5,
            borderColor: '#444',
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <View style={{height: 150}}>
          <View style={{height: 50}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '900',
                margin: 10,
              }}>
              동아리 소개
            </Text>
          </View>
          <View style={ProfilePageStyle.introduction}>
            <Text style={{color: 'black'}}>{club?.introduction}</Text>
          </View>
        </View>
        <View style={ProfilePageStyle.keywordList}>
          {/* TODO <Keyword /> iteration*/}
        </View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 0.5,
            borderColor: '#444',
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <View>
          <View style={{height: 50}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '900',
                margin: 10,
              }}>
              동아리 아카이브 기록
            </Text>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {/* TODO <Archieve /> iteration*/}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
