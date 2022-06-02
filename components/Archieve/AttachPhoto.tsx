/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import ArchieveStyle from '../Style/ArchieveStyle';
import ImagePicker from 'react-native-image-crop-picker';

let imagePath = require('../images/푸앙_윙크.png');

const AttachPhoto = () => {
  return (
    <TouchableHighlight
      style={ArchieveStyle.imageBox}
      onPress={() => {
        console.log('pree');
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
        });
      }}>
      {/* <Image style={({width: 300, height: 300})} source={imagePath} /> */}
      <Text style={{marginTop: 140}}>사진 첨부</Text>
    </TouchableHighlight>
  );
};

export default AttachPhoto;
