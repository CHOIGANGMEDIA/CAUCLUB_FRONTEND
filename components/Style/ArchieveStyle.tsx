/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const ArchieveStyle = StyleSheet.create({
    modifyButton:{
        alignItems: 'center',
        backgroundColor: '#6BBEE2',
        borderRadius: 20,
        height: 30,
        width: 60,
        justifyContent: 'center',
        marginLeft: 5,
    },
    deleteButton:{
        alignItems: 'center',
        backgroundColor: '#143365',
        borderRadius: 20,
        height: 30,
        width: 60,
        justifyContent: 'center',
        marginLeft: 5,
    },
    profile:{
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'red',
        alignItems: 'center',
    },
    clubName: {
        color: 'black',
        fontSize: 17,
        fontWeight: '900',
        marginLeft: 5,
    },
    name: {
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
    },
    heart: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
    },
    likes: {
        color: 'black',
        fontSize: 15,
        fontWeight: '900',
        marginLeft: 5,
    },
    titleArea: {
        flex: 0,
    },
    titleFont: {
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
        flexWrap: 'wrap',
        margin: 5,
    },
    contentArea: {
        flex: 0,
        margin: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    contentFont: {
        color: 'black',
        fontSize: 15,
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    archieveImage: {
        width: 360,
        height: 360,
    },
    cancelButton: {
        alignItems: 'center',
        backgroundColor: '#6BBEE2',
        borderRadius: 20,
        height: 30,
        width: 60,
        justifyContent: 'center',
        marginRight: 20,
    },
    titleStyle: {
        margin: 15,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#143365',
    },
    contentStyle: {
        height: 150,
        margin: 15,
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        flexWrap: 'wrap',
    },
    imageBox: {
        width: 300,
        height: 300,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 30,
        flexDirection: 'column', alignItems: 'center',
    },
    buttonStyle: {
        borderWidth: 15,
        borderRadius: 100,
        borderColor: '#143365',
        backgroundColor: '#143365',
        width: 200,
        margin: 20,
    },
});

export default ArchieveStyle;
