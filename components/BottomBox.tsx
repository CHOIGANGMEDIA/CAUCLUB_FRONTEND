/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import InitialStlye from './Style/InitialStyle';

const BottomBox = () => {
    return(
        <View style={InitialStlye.bottomBox}>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
      </View>
    );
};

export default BottomBox;