import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>홍서빈 우리 아들 아주 똑똑해 메롱ㅋㅋㅋㅋㅋ ㅋㅋㅋ방구쟁이</Text>
      <Text>test</Text>
      <Text style={styles.text}>홍우빈 우리 아들 아주 멋쟁이</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 30
  }

});
