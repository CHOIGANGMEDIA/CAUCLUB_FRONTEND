/* eslint-disable prettier/prettier */
import React from "react";
import ArchieveStyle from "../Style/ArchieveStyle";
import { TouchableHighlight, Text} from "react-native";

const ModifyButton = () => {
    return(
        <TouchableHighlight style={ArchieveStyle.modifyButton}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '900'}}>
            수정
          </Text>
        </TouchableHighlight>
    );
};

export default ModifyButton;