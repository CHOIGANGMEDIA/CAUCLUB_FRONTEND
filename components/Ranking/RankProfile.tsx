/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import RankingStyle from '../Style/RankingStyle';

let imagePath = require('../images/푸앙_응원.png');

// TODO API link
// TODO 터치시 동아리상세로

const RankProfile = () => {
  return (
    <TouchableHighlight style={RankingStyle.profile}>
      <View style={{flexDirection: 'row'}}>
        <View style={RankingStyle.rankNumber}>
          <Text style={RankingStyle.rankFont}>1등</Text>
        </View>
        <Image style={RankingStyle.profileImage} source={imagePath} />
        <View style={RankingStyle.clubName}>
          <ScrollView horizontal={true}>
            <Text style={RankingStyle.clubNameFont}>동아리명</Text>
          </ScrollView>
        </View>
        <View style={RankingStyle.classifiedClub}>
          <Text style={RankingStyle.classifiedClubFont}>예체능</Text>
        </View>
        <View style={RankingStyle.scoreView}>
          <Text style={RankingStyle.score}>40점</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default RankProfile;
