/* eslint-disable prettier/prettier */
import React from "react";
import ArchieveStyle from "../Style/ArchieveStyle";
import { Text, TouchableHighlight, View, TextInput, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AttachPhoto from './AttachPhoto';
import CheckBox from "@react-native-community/checkbox";

const ModifyArchieve = () => {
    return(
        <ScrollView>
          <View style={({height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'})}>
            <Text style={{color: 'black', fontSize: 22, fontWeight: '900', fontStyle: 'italic', marginLeft: 20}}>
              ARCHIEVE
            </Text>
            <TouchableHighlight style={ArchieveStyle.cancelButton}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '900'}}>
                취소
              </Text>
            </TouchableHighlight>
          </View>
          <TextInput style={ArchieveStyle.titleStyle} placeholder={'제목 불러와야해요'}></TextInput>
          <View style={({flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 30})}>
            <CheckBox></CheckBox>
            <Text>다른 동아리와의 교류 활동입니다.</Text>
          </View>
          <KeyboardAwareScrollView style={ArchieveStyle.contentStyle}>
            <TextInput multiline={true} placeholder={'내용 불러와야해요'}></TextInput>
          </KeyboardAwareScrollView>
          <AttachPhoto />
          {/* AttachPhoto 로 한 장이 첨부되고 나면 다시 AttachPhoto가 생기는거임. 혹시 사진 첨부 되기 전후 컴포넌트 분리해야하나? */}
          <View style={({flexDirection: 'row', justifyContent: 'space-around'})}>
              <TouchableHighlight style={ArchieveStyle.buttonStyle}>
                <Text style={({color: 'white', textAlign: 'center', fontWeight: '900', fontSize: 15})}>수정하기</Text>
              </TouchableHighlight>
            </View>
        </ScrollView>
    );
};

export default ModifyArchieve;