/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
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
  );
};

export default App;
