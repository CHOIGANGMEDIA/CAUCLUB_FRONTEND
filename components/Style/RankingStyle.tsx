/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const RankingStyle = StyleSheet.create({
    tappedButton:{
        width: '25%',
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#143365',
        alignItems: 'center',
        justifyContent: 'center',
    },
    untappedButton:{
        width: '25%',
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#143365',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6BBEE2',
    },
    fontStyle: {
        color: 'black',
        fontSize: 15,
    },
    profile: {
        width: '94%',
        height: 50,
        marginLeft: '3%',
        marginTop: '3%',
        borderWidth: 1,
        borderColor: '#6BBEE2',
        borderRadius: 15,
        flexDirection: 'row',
    },
    rankNumber: {
        width: 45,
        alignItems: 'center',
        justifyContent:'center',
    },
    rankFont: {
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
        fontStyle: 'italic',
    },
    profileImage:{
        width: 46,
        height: 46,
        margin: 2,
        borderRadius: 100,
        borderColor: '#143365',
        borderWidth: 1,
    },
    clubName: {
        width: 95,
        marginLeft: 5,
        marginTop: 12,
        justifyContent:'center',
    },
    clubNameFont: {
        color: 'black',
        fontSize: 18,
        fontWeight: '900',
    },
    classifiedClub: {
        width: 50,
        alignItems: 'center',
        justifyContent:'center',
    },
    classifiedClubFont: {
        color: '#a4a4a4',
        fontSize: 15,
    },
    scoreView:{
        width: 55,
        alignItems: 'center',
        justifyContent:'center',
    },
    score:{
        color: '#F7819F',
        fontSize: 18,
        fontWeight: '900',
    },
});

export default RankingStyle;