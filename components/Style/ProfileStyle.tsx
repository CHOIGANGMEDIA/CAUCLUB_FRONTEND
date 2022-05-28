/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const ProfileStyle = StyleSheet.create({
    topBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    newClubView:{
        margin: 15,
        alignItems: 'center',
        backgroundColor: '#6BBEE2',
        borderRadius: 10,
        height: 30,
        width: 100,
        justifyContent: 'center',
    },
    recommendClubView:{
        margin: 15,
        alignItems: 'center',
        backgroundColor: '#143365',
        borderRadius: 10,
        height: 30,
        width: 100,
        justifyContent: 'center',
    },
    clubName:{
        marginTop: 25,
        color: '#000000',
        fontSize: 20,
        fontWeight: '900',
    },
    classifyClub: {
        marginTop: 28,
        marginRight: 100,
        color: '#a4a4a4',
        fontSize: 15,
        fontWeight: '900',
    },
    profile:{
        marginLeft: 20,
        margin: 13,
        width: 50,
        height: 50,
        backgroundColor: '#A4A4A4',
        alignItems: 'center',
    },
    recommendProfile:{
        marginLeft:20,
        margin: 13,
        width: 100,
        height: 100,
        backgroundColor: '#A4A4A4',
        alignItems: 'center',
    },
    keywordList:{
        borderWidth: 1,
        borderColor: 'black',
        width: '90%',
        // height: 100,
        marginLeft: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    keyword:{
        color: '#143365',
        fontSize: 18,
        fontWeight: '900',
        marginLeft: 3,
        marginRight: 3,
    },
    keywordButton:{
        margin: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
    },
    puang:{
        color: 'black',
        fontSize: 15,
        fontWeight: '900',
        right: 10,
        fontStyle: 'italic',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 5,
    },
    image: {
        height: 100,
        width: 100,
        margin: 10,
        right: 20,
    },
});

export default ProfileStyle;