import React from 'react';
import { StyleSheet, View} from 'react-native';
import MainPage  from "./components/mainPage";

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
  },
});
