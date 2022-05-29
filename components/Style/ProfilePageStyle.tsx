/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const ProfilePageStyle = StyleSheet.create({
    profileList:{
        color: 'black',
        fontSize: 25,
        fontWeight: '900',
        alignItems: 'center',
        margin: 15,
    },
    modifyProfile:{
        borderRadius: 10,
        backgroundColor: '#6BBEE2',
        marginLeft: 30,
        alignItems: 'center',
    },
    registerTrue:{
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#a4a4a4',
        marginLeft: 30,
        alignItems: 'center',
    },
    registerFalse:{
        borderRadius: 10,
        backgroundColor: '#6BBEE2',
        marginLeft: 30,
        alignItems: 'center',
    },
    noAssignment:{
        borderRadius: 10,
        backgroundColor: '#a4a4a4',
        marginLeft: 30,
        alignItems: 'center',
    },
    puang:{
        color: 'black',
        fontSize: 12,
    },
    profile:{
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 10,
        backgroundColor: '#A4A4A4',
    },
    information:{
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
        margin: 3,
    },
    introduction:{
        height: 100,
        marginLeft: 15,
        marginRight: 15,
    },
    keywordList:{
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    image: {
        height: 120,
        width: 120,
    },
  });

export default ProfilePageStyle;
