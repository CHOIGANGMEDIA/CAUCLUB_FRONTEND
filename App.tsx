import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BoardList from './components/BoardList';
import BoardModify from './components/BoardModify';
import BoardNew from './components/BoardNew';
import BoardScreen from './components/BoardScreen';
import LoginScreen from './components/LoginScreen';
import MyPage from './components/MyPage';
import BoardNavigator from './components/navigation/BoardNavigator';
import ProfileList from './components/Profile/ProfileList';
import Profile from './components/Profile/Profile';
import RegisterScreen from './components/RegisterScreen';
import SearchID from './components/SearchID';
import SearchPW from './components/SearchPW';
import BottomBox from './components/BottomBox/BottomBox';
import Style from './components/Style/Style';
import TopBox from './components/TopBox';
import ProfilePageP from './components/Profile/ProfilePageP';
import ProfilePageMtrue from './components/Profile/ProfilePageMtrue';
import RecommendProfile from './components/Profile/RecommendProfile';
import RecommendClubList from './components/Profile/RecommendClubList';

const App = () => {
  return (
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <BoardNavigator />
    //   </NavigationContainer>
    // </SafeAreaProvider>
    <SafeAreaView style={{flex: 1}}>
      {/* <RegisterScreen /> */}
      {/* <TopBox />
      <ProfilePageP />
      <BottomBox /> */}
      {/* <LoginScreen /> */}
      <MyPage />
    </SafeAreaView>
  );
};

export default App;
