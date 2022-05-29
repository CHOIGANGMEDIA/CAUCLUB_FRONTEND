import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type BottomButtonProps = {
  icon: string;
  navigate: string;
};

const BottomButton = ({icon, navigate}: BottomButtonProps) => {
  return (
    <TouchableOpacity style={{padding: 20}}>
      <Text>{icon}</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;
