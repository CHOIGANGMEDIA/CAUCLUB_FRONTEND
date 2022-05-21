/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight} from 'react-native';
import ChatStyle from './Style/ChatStyle';

const ChatList = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={ChatStyle.titleBox}>
        <Text style={ChatStyle.title}>CAUCLUB</Text>
      </View>
      <View style={ChatStyle.topBox}>
        <Text style={ChatStyle.chatTitle}>채팅</Text>
        <TouchableHighlight style={({margin: 15, alignItems: 'flex-end'})}>
            <Text style={({color: '#000000', fontSize: 20})}>new</Text>
        </TouchableHighlight>
      </View>
      <View style={({backgroundColor: '#6BBEE2'})}>
        <View style={ChatStyle.chatList}>
          <TouchableHighlight style={ChatStyle.profile}>
            <></>
            {/* 프로필 사진 */}
          </TouchableHighlight>
          <TouchableHighlight style={({width: '75%', alignItems: 'flex-start'})}>
            <View>
              <Text style={ChatStyle.clubName}>동아리명</Text>
              <Text style={ChatStyle.lastMessage}>최근 메시지</Text>
            </View>
          </TouchableHighlight>
        </View>
        {/* 여기서부터 */}
        {/* 반복구간 */}
        <View style={ChatStyle.chatList}>
          <TouchableHighlight style={ChatStyle.profile}>
            <></>
            {/* 프로필 사진 */}
          </TouchableHighlight>
          <TouchableHighlight style={({width: '75%', alignItems: 'flex-start'})}>
            <View>
              <Text style={ChatStyle.clubName}>동아리명</Text>
              <Text style={ChatStyle.lastMessage}>최근 메시지</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={ChatStyle.chatList}>
          <TouchableHighlight style={ChatStyle.profile}>
            <></>
            {/* 프로필 사진 */}
          </TouchableHighlight>
          <TouchableHighlight style={({width: '75%', alignItems: 'flex-start'})}>
            <View>
              <Text style={ChatStyle.clubName}>동아리명</Text>
              <Text style={ChatStyle.lastMessage}>최근 메시지</Text>
            </View>
          </TouchableHighlight>
        </View>
        {/* 여기까지 */}
        {/* 반복구간 */}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ChatList;
