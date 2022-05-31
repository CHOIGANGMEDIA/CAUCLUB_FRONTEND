/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ArchievePage from './ArchievePage';

const ArchieveList = () => {
    return (
        <ScrollView style={({flex: 0})}>
            <ArchievePage />
            <ArchievePage />
            <ArchievePage />
            <ArchievePage />
        </ScrollView>
    );
};

export default ArchieveList;