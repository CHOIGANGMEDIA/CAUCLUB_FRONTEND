import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components';
import LoginScreen from './components/LoginScreen';

// const Title = styled.view`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #f5fcff;
// `;

// const MainText = styled.text`
//   font-size: 15px;
//   text-align: center;
//   margin: 10px;
//   color: red;
// `;

// interface Props {}
// interface State {}

// interface StyledTextProps {
//   readonly length?: number;
// }

// const StyledText = styled.text<StyledTextProps>`
//   padding: 50px;
//   background-color: yellow;
//   text-align: center;
// `;

// const StyledButton = styled(Button)`
//   margin: 30px;
//   background-color: blue;
// `;
// interface StyledTextInputProps {
//   readonly inputColor?: string;
//   readonly bold?: boolean;
// }

// const StyledTextInput = styled.TextInput<StyledTextInputProps>`
//   padding: 20px;
//   margin: 10px;
//   color: black;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

const App = () => {
  // const [text, onChangeText1] = React.useState('');

  return (
    <>
      {/* <StyledText length={text.length}>StyledView Components</StyledText> */}
      {/* <StyledButton type="primary"> test Button </StyledButton>
      <StyledTextInput onChangeText={onChangeText1} value={text} />
      <StyledTextInput inputColor="blue" bold /> */}
      {/* <MainText>HI</MainText> */}
      <LoginScreen />
    </>
  );
};
export default App;
