/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, TouchableHighlight, Image, ScrollView } from "react-native";
import InitialStlye from "../Style/InitialStyle";
import RankingStyle from "../Style/RankingStyle";
import RankProfile from "./RankProfile";

let imagePath = require('../images/푸앙_응원.png');

const Ranking = () => {
    return(
    <View style={({flex: 1})}>
        <View style={({height: 60, flexDirection: 'row', justifyContent: 'space-between'})}>
            <Text style={InitialStlye.boardTitle}>랭킹</Text>
            <View style={({width: 300, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'})}>
                <Text style={({fontSize: 15, marginRight: 5})}>우리 동아리는 몇 등인지 볼까앙</Text>
                <Image style={{width: 60, height: 60, marginRight: 10}} source={imagePath} />
            </View>
        </View>
        <View style={({height: '87%', width: '90%', margin: '5%'})}>
            <View style={({height: 40, width: '100%', flexDirection: 'row'})}>
                <TouchableHighlight style={RankingStyle.tappedButton}>
                    <Text style={RankingStyle.fontStyle}>전체</Text>
                </TouchableHighlight>
                <TouchableHighlight style={RankingStyle.untappedButton}>
                    <Text style={RankingStyle.fontStyle}>학술</Text>
                </TouchableHighlight>
                <TouchableHighlight style={RankingStyle.untappedButton}>
                    <Text style={RankingStyle.fontStyle}>예체능</Text>
                </TouchableHighlight>
                <TouchableHighlight style={RankingStyle.untappedButton}>
                    <Text style={RankingStyle.fontStyle}>기타</Text>
                </TouchableHighlight>
            </View>
            <ScrollView style={({height: '92%', width: '100%', borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#143365'})}>
                <RankProfile /><RankProfile />
            </ScrollView>
        </View>
    </View>
    );
};

export default Ranking;


