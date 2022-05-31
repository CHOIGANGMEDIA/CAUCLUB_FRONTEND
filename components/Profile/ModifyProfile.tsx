/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, Image, TouchableHighlight, TextInput} from 'react-native';
import ProfilePageStyle from '../Style/ProfilePageStyle';
import Keyword from './Keyword';
import Archieve from './Archieve';

let imagePath = require('../images/푸앙_윙크.png');

const ModifyProfile = () => {
  return (
    <>
      <KeyboardAwareScrollView>
        <View style={{flex: 1, height: 100, flexDirection: 'row'}}>
          <View style={{width: '80%', flexDirection: 'column'}}>
            <View style={{height: 65}}>
              <Text style={ProfilePageStyle.profileList}>동아리 프로필</Text>
            </View>
            <View style={{height: 35, flexDirection: 'row'}}>
              <View style={{width: '40%'}}>
                <TouchableHighlight style={ProfilePageStyle.modifyProfile}>
                  <Text style={{color: 'white', fontSize: 15, fontWeight: '900', margin: 5}}>
                    수정 완료
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={{width: '60%', alignItems: 'flex-end'}}>
                <Text style={ProfilePageStyle.puang}>
                  우리 동아리를 소개합니다앙~!
                </Text>
              </View>
            </View>
          </View>
          <View style={{width: '20%'}}>
            <Image style={{width: 72, height: 100}} source={imagePath} />
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
                
                <TouchableHighlight>
                  <>
                    <Text>프로필 사진 변경</Text>
                    {/* <Image style={{width: 150, height: 150, borderRadius: 100}} source={imagePath} /> */}
                  </>
                </TouchableHighlight>
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
              <View style={{height: '70%'}}>
                <Text style={{color: 'black'}}>동아리명</Text>
                <TextInput style={({fontSize: 15})} placeholder={'동아리명 입력'} />
              </View>
            </View>
            <View style={{height: '25%'}}>
              <View style={{height: '70%'}}>
                <Text style={{color: 'black', marginTop: 5}}>소속 캠퍼스</Text>
                <TextInput style={({fontSize: 15})} placeholder={'소속 캠퍼스 입력'} />
              </View>
            </View>
            <View style={{height: '25%'}}>
              <View style={{height: '70%'}}>
                <Text style={{color: 'black', marginTop: 5}}>동아리 분류</Text>
                <TextInput style={({fontSize: 15})} placeholder={'동아리 분류 입력'} />
              </View>
            </View>
            <View style={{height: '25%'}}>
              <View style={{height: '70%'}}>
                <Text style={{color: 'black', marginTop: 5}}>동아리장 이름</Text>
                <TextInput style={({fontSize: 15})} placeholder={'동아리장 이름 입력'} />
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
            <TextInput style={{color: 'black'}} multiline={true} placeholder={'동아리에 대해 소개해주세요!'} />
          </View>
        </View>
        <View style={ProfilePageStyle.keywordList}>
          <Keyword />
          <Keyword />
          <Keyword />
          <Keyword />
          <Keyword />
          <Keyword />
          <Keyword />
          <Keyword />
          <Keyword />
          <Keyword />
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
              <Archieve />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default ModifyProfile;
