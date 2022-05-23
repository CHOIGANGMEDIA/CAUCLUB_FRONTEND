/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const BoardStyle = StyleSheet.create({
    boardList:{
        flex: 1,
        // borderWidth: 1,
        // borderColor: '#000000',
        margin: 5,
        height: 90,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boardTitle:{
        margin: 15,
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'left',
    },
    clubName:{
        marginTop: 5,
        color: '#000000',
        fontSize: 12,
        fontWeight: '900',
        paddingLeft: 10,
    },
    title:{
        marginTop: 5,
        marginRight: 50,
        color: '#000000',
        fontSize: 15,
        fontWeight: '900',
        paddingLeft: 15,
    },
    newContent:{
        margin: 15,
        alignItems: 'center',
        backgroundColor: '#6BBEE2',
        borderRadius: 10,
        height: 30,
        width: 60,
        justifyContent: 'center',
    },
    content:{
        marginTop: 5,
        color: '#000000',
        fontSize: 12,
        paddingLeft: 20,
        marginRight: 10,
        height: 33,
    },
    inputTitle:{
        width: '95%',
        height: 50,
        margin: 5,
        borderWidth: 1,
        borderColor: '#143365',
        paddingLeft: 10,
    },
    inputContent:{
        width: '95%',
        height: 420,
        margin: 5,
        borderWidth: 1,
        borderColor: '#143365',
        paddingLeft: 10,
        textAlign: 'left',
        textAlignVertical: 'top', //android에만 적용되는 것 같음
    },
    submmitButton:{
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#6BBEE2',
        borderRadius: 10,
        height: 40,
        width: 150,
        justifyContent: 'center',
    },
    button1:{
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#6BBEE2',
        borderRadius: 20,
        height: 40,
        width: 70,
        justifyContent: 'center',
    },
    button2:{
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#143365',
        borderRadius: 20,
        height: 40,
        width: 70,
        justifyContent: 'center',
    },
    screenTitle:{
        width: '95%',
        height: 20,
        marginTop: 20,
        paddingLeft: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: '900',
    },
    screenClub: {
        width: 60,
        height: 20,
        marginTop: 20,
        paddingLeft: 12,
        color: 'black',
        fontSize: 14,
        fontWeight: '900',
        textAlign: 'left',
    },
    screenContent:{
        margin: 30,
        // paddingLeft: 15,
        // paddingRight: 15,
        color: 'black',
        fontSize: 12,
        textAlign: 'left',
        textAlignVertical: 'top', //android에만 적용되는 것 같음
    }
});

export default BoardStyle;