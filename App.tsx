/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
<<<<<<< HEAD
import MainNavigator from './components/navigation/MainNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
        {/* <BoardNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>
    // <SafeAreaView style={{flex: 1}}>
    //   {/* <RegisterScreen /> */}
    //   {/* <TopBox />
    //   <ProfilePageP />
    //   <BottomBox /> */}
    //   {/* <LoginScreen /> */}
    //   <MyPage />
    // </SafeAreaView>
=======
import BoardList from './components/BoardList';
import BoardModify from './components/BoardModify';
import BoardNew from './components/BoardNew';
import BoardScreen from './components/BoardScreen';
import BottomBox from './components/BottomBox';
import LoginScreen from './components/LoginScreen';
import MyPage from './components/MyPage';
import BoardNavigator from './components/navigation/BoardNavigator';
import ProfileList from './components/Profile/ProfileList';
import RecommendClubList from './components/Profile/RecommendClubList';
import RegisterScreen from './components/RegisterScreen';
import ResetPW from './components/ResetPW';
import SearchID from './components/SearchID';
import SearchPW from './components/SearchPW';
import TopBox from './components/TopBox';
import ArchievePage from './components/Archieve/ArchievePage';
import ModifyButton from './components/Archieve/ModifyButton';
import DeleteButton from './components/Archieve/DeleteButton';
import ArchieveList from './components/Archieve/ArchieveList';
import GenerateArchieve from './components/Archieve/GenerateArchieve';
import ModifyArchieve from './components/Archieve/ModifyArchieve';
import Ranking from './components/Ranking/Ranking';

const App = () => {
  return (
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <BoardScreen />
    //   </NavigationContainer>
    //   {/* <RegisterScreen /> */}
    // </SafeAreaProvider>

    <SafeAreaView style={{flex: 1}}>
      <TopBox />
      <MyPage />
      <BottomBox />
    </SafeAreaView>
>>>>>>> CHOIGANGMEDIA-main
  );
};

export default App;
