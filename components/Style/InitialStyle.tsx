/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const InitialStlye = StyleSheet.create({
  titleBox: {
    flex: 0,
    backgroundColor: '#6BBEE2',
  },
  title: {
    color: 'black',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: '900',
    textAlign: 'center',
  },
  topBox: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boardTitle: {
    margin: 15,
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'left',
  },
  bottomBox: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#6BBEE2',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default InitialStlye;
