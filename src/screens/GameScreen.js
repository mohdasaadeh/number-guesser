import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import { Button } from "../components";
import { colors } from "../constants";

export const GameScreen = ({ number, guessedNumber, setMin, setMax }) => {
  const handleGuess = (direction) => {
    if (direction === "lower" && guessedNumber > number) {
      setMax(guessedNumber);
    } else if (direction === "higher" && guessedNumber < number) {
      setMin(guessedNumber + 1);
    } else {
      Alert.alert("Wrong Help", "Please guide the app correctly", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>{guessedNumber}</Text>
      </View>
      <View style={styles.buttonsBox}>
        <View style={styles.buttonBox} marginRight={20}>
          <Button title="-" onPress={() => handleGuess("lower")} />
        </View>
        <View style={styles.buttonBox}>
          <Button title="+" onPress={() => handleGuess("higher")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 40,
  },
  textBox: {
    width: "100%",
    paddingVertical: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: colors.secondaryLight,
    borderRadius: 15,
  },
  text: {
    fontSize: 60,
    color: colors.secondaryLight,
  },
  buttonsBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonBox: {
    width: 80,
  },
});
