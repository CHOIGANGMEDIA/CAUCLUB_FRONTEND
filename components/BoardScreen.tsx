/* eslint-disable prettier/prettier */
import React, {useCallback} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';

import {PostProps} from './BoardList';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NavigationHeader} from './navigation/NavigationHeader';
import {MaterialCommunityIcon as Icon} from './navigation/MaterialCommunityIcon';
import {SafeAreaView} from './navigation/SafeAreaView';

const BoardScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const goBack = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
    console.log('back pressed');
  }, []);
  const {postId, clubName, title, contents} = route.params;
  return (
    <SafeAreaView>
      <NavigationHeader
        Left={() => (
          <Icon
            name="chevron-left"
            size={30}
            onPress={goBack}
            style={{backgroundColor: 'transparent'}}
          />
        )}
      />
      <KeyboardAwareScrollView>
        <View
          style={{width: '100%', borderBottomWidth: 0.5, borderColor: '#444'}}
        />
        <View>
          <View style={{height: 553, alignItems: 'center'}}>
            <Text style={BoardStyle.screenTitle}>{title}</Text>
            <View style={{flexDirection: 'row', width: '95%'}}>
              <Text style={BoardStyle.screenClub}>작성자: </Text>
              {/* 동아리명(ChAOS) 클릭하면 해당 동아리 프로필로 가게끔 하려고 버튼으로 만들었어요 */}
              <TouchableHighlight style={BoardStyle.screenClub}>
                <Text style={{color: 'black', fontWeight: '900'}}>
                  {clubName}
                </Text>
              </TouchableHighlight>
            </View>
            <Text style={BoardStyle.screenContent}>{contents}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BoardScreen;
