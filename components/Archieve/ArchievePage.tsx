/* eslint-disable prettier/prettier */
import React from 'react';
import ArchieveStyle from '../Style/ArchieveStyle';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import ButtonforP from './ButtonforP';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
import ArchieveImage from './ArchieveImage';
import {MaterialCommunityIcon as Icon} from '../navigation/MaterialCommunityIcon';

let imagePath = require('../images/푸앙_윙크.png');

{
  /* 전체 height: 81% 혹은 572, 전체 width: 360*/
}

// TODO api link
// TODO navigated: useRoute
const ArchievePage = () => {
  return (
    <KeyboardAwareScrollView style={{flex: 0}}>
      <View style={{height: 60, flexDirection: 'row'}}>
        <View
          style={{width: 60, alignItems: 'center', justifyContent: 'center'}}>
          <View style={ArchieveStyle.profile}>
            <Image
              style={{width: 50, height: 50, borderRadius: 100}}
              source={imagePath}></Image>
          </View>
        </View>
        <View
          style={{
            width: 150,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text style={ArchieveStyle.clubName}>동아리명</Text>
          <Text style={ArchieveStyle.name}>작성자</Text>
        </View>
        <View
          style={{
            width: 150,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* 회장 권한 있을 시 */}
          <ButtonforP />
        </View>
      </View>
      <ScrollView horizontal={true} style={ArchieveStyle.archieveImage}>
        <ArchieveImage />
        <ArchieveImage />
        <ArchieveImage />
      </ScrollView>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        {/* TODO Icon 클릭 전환 heart:heart-outline*/}
        <Icon name="heart-outline" size={40} style={ArchieveStyle.heart} />
        <Text style={ArchieveStyle.likes}>좋아요 OO개</Text>
      </View>
      <View style={{flex: 0}}>
        <Text style={ArchieveStyle.titleFont}>제목 쓰는 칸입니다</Text>
      </View>
      <View style={ArchieveStyle.contentArea}>
        <Text style={ArchieveStyle.contentFont}>아카이브 글 쓰는 칸입니다</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ArchievePage;
