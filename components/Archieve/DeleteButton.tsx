/* eslint-disable prettier/prettier */
import React from "react";
import ArchieveStyle from "../Style/ArchieveStyle";
import { TouchableHighlight, Text } from "react-native";

const DeleteButton = () => {
    return(
        <TouchableHighlight style={ArchieveStyle.deleteButton}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '900'}}>
            삭제
          </Text>
        </TouchableHighlight>
    );
};

export default DeleteButton;