/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import ProfilePageStyle from '../Style/ProfilePageStyle';

let imagePath = require('../images/푸앙_윙크.png');

const Archieve = () => {
    return(
        <TouchableHighlight>
            <View style={({width: 120, height: 120, borderWidth: 1, borderColor: '#a4a4a4'})}>
                <Image style={ProfilePageStyle.image} source={imagePath}></Image>
            </View>
        </TouchableHighlight>
    );
};

export default Archieve;