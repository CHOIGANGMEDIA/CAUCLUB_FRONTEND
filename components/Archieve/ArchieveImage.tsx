/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import ArchieveStyle from '../Style/ArchieveStyle';

let imagePath = require('../images/νΈμ_μν¬.png');

const ArchieveImage = () => {
    return(
        <Image style={ArchieveStyle.archieveImage} source={imagePath}></Image>
    );
};

export default ArchieveImage;