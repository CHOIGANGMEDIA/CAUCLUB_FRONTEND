/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import ProfileStyle from '../Style/ProfileStyle';
import Keyword from './Keyword';

const RecommendProfile = () => {
    return (
        <TouchableHighlight style={({borderWidth: 1, borderColor: 'black', margin: 5})}>
          <>
            <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>
              <View style={ProfileStyle.profile}>
                    <></>
                    {/* 프로필 사진 */}
              </View>
              <View style={({flexDirection: 'row', width: '75%', justifyContent: 'space-between'})}>
                <Text style={ProfileStyle.clubName}>동아리명</Text>
                <View style={({marginTop: 20})}>
                  <Text style={ProfileStyle.classifyClub}>동아리분류</Text>
                  <Text style={ProfileStyle.classifyClub}>소속캠퍼스</Text>
                </View>
              </View>
            </View>
            <View style={ProfileStyle.keywordList}>
                <Keyword />
                <Keyword />
                <Keyword />
                <Keyword />
                <Keyword />
                <Keyword />
                <Keyword />
                <Keyword />
            </View>
          </>
        </TouchableHighlight>
    );
};

export default RecommendProfile;
