import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BoardList from './components/BoardList';
import BoardModify from './components/BoardModify';
import BoardNew from './components/BoardNew';
import BoardScreen from './components/BoardScreen';
import LoginScreen from './components/LoginScreen';
import MyPage from './components/MyPage';
import BoardNavigator from './components/navigation/BoardNavigator';
import RegisterScreen from './components/RegisterScreen';
import SearchID from './components/SearchID';
import SearchPW from './components/SearchPW';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BoardNavigator />
      </NavigationContainer>
      {/* <RegisterScreen /> */}
    </SafeAreaProvider>
  );
};
export default App;
