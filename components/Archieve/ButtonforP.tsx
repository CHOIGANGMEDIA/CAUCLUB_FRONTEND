/* eslint-disable prettier/prettier */
import React from "react";
import ModifyButton from "./ModifyButton";
import DeleteButton from "./DeleteButton";
import {View} from "react-native";

const ButtonforP = () => {
    return(
        <View style={({width: 150, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'})}>
          <ModifyButton /><DeleteButton />
        </View>
    );
};

export default ButtonforP;