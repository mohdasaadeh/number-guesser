import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../components";
import { colors } from "../constants";

export const GameOverScreen = ({ guessedNumber, guessCount, onGameOver }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>{guessedNumber}</Text>
      </View>
      <View style={styles.buttonsBox}>
        <View style={styles.buttonBox} marginRight={20}>
          <Button title="Play again" onPress={onGameOver} />
        </View>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>
          Number of guesses are:{" "}
          <Text style={{ fontSize: 30 }}>{guessCount.length}</Text>
        </Text>
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
    width: 150,
  },
  result: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    color: "white",
  },
});
