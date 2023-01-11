import React from "react";
import { View, StyleSheet, ImageBackground, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Button } from "../components";

export const NumberScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#6a040f", "#faa307"]}
        style={styles.background}
      />
      <ImageBackground
        source={require("../../assets/dice.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <View style={styles.inputBox}>
        <TextInput style={styles.input} keyboardType="numeric" />
        <View style={styles.buttonsBox}>
          <View style={styles.buttonBox} marginRight={20}>
            <Button title="Reset" />
          </View>
          <View style={styles.buttonBox}>
            <Button title="Confirm" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  imageBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    opacity: 0.2,
  },
  inputBox: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: "#370617",
    borderRadius: 8,
  },
  input: {
    width: 70,
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#ffba08",
    fontSize: 20,
    textAlign: "center",
  },
  buttonsBox: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBox: {
    width: 110,
  },
});
