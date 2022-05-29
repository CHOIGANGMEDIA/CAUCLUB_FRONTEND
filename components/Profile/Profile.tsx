/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {customAxios} from '../../src/axiosModule/customAxios';
import ProfileStyle from '../Style/ProfileStyle';
import {Club} from './Club';

type ProfileProps = {
  memberId?: string;
  clubId: number;
};

const Profile = ({memberId, clubId}: ProfileProps) => {
  const [club, setClub] = useState<Club>();

  useEffect(() => {
    customAxios
      .get(`/${memberId}/${clubId}`)
      .then(response => {
        setClub(response.data);
        console.log(club?.keyword);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <TouchableHighlight
      style={{borderWidth: 1, borderColor: 'black', margin: 5}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {club !== undefined ? (
          <Image source={{uri: club.picture}} style={ProfileStyle.profile} />
        ) : (
          <View style={ProfileStyle.profile}></View>
        )}
        <View
          style={{
            flexDirection: 'row',
            width: '75%',
            justifyContent: 'space-between',
          }}>
          <Text style={ProfileStyle.clubName}>{club?.name}</Text>
          <Text style={ProfileStyle.classifyClub}>{club?.type}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Profile;
