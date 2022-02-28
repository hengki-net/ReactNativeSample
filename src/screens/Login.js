import React, { useState } from "react";
import styled from "styled-components/native";
import { Image, Text, Button, StyleSheet } from 'react-native';
import { Input } from '../components';
import { images } from '../utils/images';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;  
  padding : 30px;  
`;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: "50%",
    height: "50%",
    resizeMode: 'contain'
  }
});

const Login = ({ navigation }) => {

  const [uid, setUid] = useState('');
  const [upw, setUpw] = useState('');

  return (
    <Container>
      <Image source={require('../../assets/seahLogo.png')} style={styles.logo} />
      
      <Input
        label="아이디"
        placeholder="아이디"
        value={uid}
        onChangeText={text => setUid(text)}
        onSubmitEditing={() => {}}
        returnKeyType="next"
      />

      <Input
        label="패스워드"
        placeholder="패스워드"
        value={upw}
        onChangeText={text => setUpw(text)}
        onSubmitEditing={() => {}}
        returnKeyType="done"
        isPassword
      />

      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>


    </Container>
  );
};

export default Login;