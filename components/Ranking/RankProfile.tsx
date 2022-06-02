/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import RankingStyle from '../Style/RankingStyle';
import type {Club} from '../Profile/Club';
import {customAxios} from '../../src/axiosModule/customAxios';
import {useNavigation} from '@react-navigation/native';

let imagePath = require('../images/푸앙_응원.png');

type RankProfileProps = {
  rank: number;
  clubId: number;
  loggedId: string;
};

export type {RankProfileProps};

// TODO 터치시 동아리상세로

const RankProfile = ({rank, clubId, loggedId}: RankProfileProps) => {
  const [club, setClub] = useState<Club>();
  const navigation = useNavigation<any>();
  const gotoProfilePage = useCallback(
    () =>
      navigation.navigate('ProfilePage', {clubId: clubId, loggedId: loggedId}),
    [],
  );
  useEffect(() => {
    customAxios
      .get(`/club/${clubId}`)
      .then(response => {
        setClub(response.data);
      })
      .catch(error => console.log(error));
    return () => setClub(undefined);
  }, []);

  return (
    <TouchableHighlight style={RankingStyle.profile} onPress={gotoProfilePage}>
      <View style={{flexDirection: 'row'}}>
        <View style={RankingStyle.rankNumber}>
          <Text style={RankingStyle.rankFont}>{rank}등</Text>
        </View>

        <Image
          style={RankingStyle.profileImage}
          source={club?.picture ? {uri: club.picture} : imagePath}
        />
        <View style={RankingStyle.clubName}>
          <ScrollView horizontal={true}>
            <Text style={RankingStyle.clubNameFont}>{club?.name}</Text>
          </ScrollView>
        </View>
        <View style={RankingStyle.classifiedClub}>
          <Text style={RankingStyle.classifiedClubFont}>
            {club?.type.substring(0, club?.type.length - 3)}
          </Text>
        </View>
        <View style={RankingStyle.scoreView}>
          <Text style={RankingStyle.score}>{club?.score}점</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default RankProfile;
