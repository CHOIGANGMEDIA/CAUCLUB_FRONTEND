/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import ProfileStyle from '../Style/ProfileStyle';

const Keyword = () => {
    return(
        <TouchableHighlight style={ProfileStyle.keywordButton}>
                    <Text style={ProfileStyle.keyword}>#Hi</Text>
        </TouchableHighlight>
    );
};

export default Keyword;
