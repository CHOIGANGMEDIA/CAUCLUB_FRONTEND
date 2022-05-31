/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text} from "react-native";
import ArchieveStyle from '../Style/ArchieveStyle';

let imagePath = require('../images/푸앙_윙크.png');

const AttachPhoto = () => {
    return(
        <View style={ArchieveStyle.imageBox}>
            {/* <Image style={({width: 300, height: 300})} source={imagePath} /> */}
            <Text style={({marginTop: 140})}>사진 첨부</Text>
          </View>
    );
};

export default AttachPhoto;