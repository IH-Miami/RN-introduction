import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Test from "./components/Test";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greet}>This is React Native</Text>
      <Test />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  greet: {
    color: "green",
  },
});
