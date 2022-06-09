/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6BBEE2',
  },
  welcomeTitle: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 50,
  },
  appTitle: {
    color: 'black',
    fontSize: 50,
    fontStyle: 'italic',
    marginBottom: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  boxStyle: {
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#143365',
    borderRadius: 100,
  },
  textStyle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
    left: 20,
  },
  buttonStyle: {
    borderWidth: 15,
    borderRadius: 100,
    borderColor: '#143365',
    backgroundColor: '#143365',
    width: 320,
    justifyContent: 'center',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomCenter: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lastCenter: {
    margin: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    height: 120,
    width: 120,
    margin: 10,
    right: 20,
  },
  warnSubStyle: {
    color: 'red',
    fontSize: 13,
    fontWeight: 'normal',
    left: 20,
  },
});

export default Style;
