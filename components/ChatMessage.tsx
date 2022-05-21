/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import ChatStyle from './Style/ChatStyle';

const ChatMessage = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={ChatStyle.titleBox}>
        <Text style={ChatStyle.title}>CAUCLUB</Text>
      </View>
      <Text style={ChatStyle.chatName}>동아리명</Text>
      <View style={ChatStyle.chatScrollView}>
          <View style={({alignItems: 'flex-start'})}>
            <Text style={ChatStyle.receiveMessage}>받은 메시지</Text>
          </View>
          <View style={({alignItems: 'flex-end'})}>
            <Text style={ChatStyle.sendMessage}>보낸 메시지</Text>
          </View>
            {/* 여기서부터 */}
            {/* 반복구간 */}
          <View style={({alignItems: 'flex-start'})}>
            <Text style={ChatStyle.receiveMessage}>받은 메시지</Text>
          </View>
          <View style={({alignItems: 'flex-end'})}>
            <Text style={ChatStyle.sendMessage}>보낸 메시지</Text>
          </View>
          <View style={({alignItems: 'flex-start'})}>
            <Text style={ChatStyle.receiveMessage}>받은 메시지</Text>
          </View>
          <View style={({alignItems: 'flex-end'})}>
            <Text style={ChatStyle.sendMessage}>보낸 메시지</Text>
          </View>
          {/* 여기까지 */}
          {/* 반복구간 */}
      </View>
      <View style={ChatStyle.chatControl}>
        <TextInput style={ChatStyle.chatInput}>
            <Text style={({color: '#143365'})}>write message</Text>
        </TextInput> 
        <TouchableHighlight style={ChatStyle.sendButton}>
            <Text style={({color: '#143365'})}>send</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ChatMessage;