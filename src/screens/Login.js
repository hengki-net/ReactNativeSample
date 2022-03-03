import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components/native";
import { Image, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '../components';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProgressContext } from '../contexts';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: "50%",
    height: "50%",
    resizeMode: 'contain',
  }
});

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const Login = ({ navigation }) => {

  const insets = useSafeAreaInsets();
  const { spinner } = useContext(ProgressContext);

  const [uid, setUid] = useState('');
  const [upw, setUpw] = useState('');
  // 아이디 입력후 패스워드로 이동
  const passwordRef = useRef();
  // 에러 메세지 출력
  const [errorMessage, setErrorMessage] = useState('');
  // 아이디, 패스워드 미입력시 disabled
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!(uid && upw && !errorMessage));
  }, [uid, upw, errorMessage]);


  // [이벤트] 패스워드 빈칸 제거
  const _handlePasswordChange = password => {
    setUpw(removeWhitespace(password));
  };

  // [이벤트]  버튼 클릭
  const _handleLoginButtonPress = () => {

    try {
      spinner.start();
      Alert.alert('Login 성공');
    }
    catch {
      Alert.alert('Login error', e.message);
    }
    finally {
      spinner.stop();
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container insets={insets}>

        <Image source={require('../../assets/seahLogo.png')} style={styles.logo} />

        <Input
          label="ID"
          placeholder="ID"
          value={uid}
          onChangeText={text => setUid(text)}
          onSubmitEditing={() => { passwordRef.current.focus() }}
          returnKeyType="next"
        />

        <Input
          ref={passwordRef}
          label="Password"
          placeholder="Password"
          value={upw}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          returnKeyType="done"
          isPassword
        />

        <ErrorText>{errorMessage}</ErrorText>

        <Button
          title="로그인"
          onPress={_handleLoginButtonPress}
          disabled={disabled}
        />

        <Text />
        <Text />
        <Text />
        <Text />

      </Container>

    </KeyboardAwareScrollView>
  );
};

export default Login;