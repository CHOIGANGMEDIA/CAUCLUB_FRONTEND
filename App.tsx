/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BoardList from './components/BoardList';
import BoardModify from './components/BoardModify';
import BoardNew from './components/BoardNew';
import BoardScreen from './components/BoardScreen';
import BottomBox from './components/BottomBox';
import LoginScreen from './components/LoginScreen';
import MyPage from './components/MyPage';
import BoardNavigator from './components/navigation/BoardNavigator';
import RecommendClubList from './components/Profile/RecommendClubList';
import RegisterScreen from './components/RegisterScreen';
import SearchID from './components/SearchID';
import SearchPW from './components/SearchPW';
import TopBox from './components/TopBox';

const App = () => {
  return (
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <BoardNavigator />
    //   </NavigationContainer>
    //   {/* <RegisterScreen /> */}
    // </SafeAreaProvider>
    <SafeAreaView style={{flex: 1}}>
      <TopBox />
      <RecommendClubList />
      <BottomBox />
    </SafeAreaView>
  );
};
export default App;
