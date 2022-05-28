/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const ChatStyle = StyleSheet.create({
    chatList:{
        borderWidth: 1,
        borderColor: '#000000',
        margin: 5,
        height: 80,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profile:{
        marginLeft: 20,
        margin: 13,
        width: 50,
        height: 50,
        backgroundColor: '#A4A4A4',
        alignItems: 'center',
    },
    clubName:{
        marginTop: 15,
        marginRight: 50,
        color: '#000000',
        fontSize: 15,
        fontWeight: '900',
    },
    lastMessage:{
        marginTop: 5,
        color: '#000000',
        fontSize: 12,
    },
    chatName:{
        margin: 10,
        color: '#000000',
        fontSize: 18,
        fontWeight: '900',
        textAlign: 'center',
    },
    sendButton:{
        backgroundColor: '#6BBEE2',
        height: 40,
        width: 50,
        borderRadius: 20,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    chatInput: {
        backgroundColor: 'white',
        width: '75%',
        height: 40,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        borderRadius: 20,
    },
    chatControl: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatScrollView:{
        margin: 10,
        width: '95%',
        height: 520,
        borderWidth: 1,
        borderColor: '#6BBEE2',
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    receiveMessage:{
        borderWidth: 1,
        borderColor: '#6BBEE2',
        fontSize: 15,
        color: 'black',
        margin: 5,
        alignItems: 'flex-start',
    },
    sendMessage:{
        backgroundColor: '#6BBEE2',
        margin: 5,
        fontSize: 15,
        color: 'black',
    },
});

export default ChatStyle;
