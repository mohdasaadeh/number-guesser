import React from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";

import { Button } from "../components";
import { colors } from "../constants";

export const GameStartScreen = ({
  setScreen,
  number,
  setNumber,
  onGameStart,
}) => {
  const onConfirm = () => {
    const numberValue = Number(number);

    if (!numberValue || numberValue <= 0 || numberValue >= 100) {
      Alert.alert("Invalid Number", "The number must be between 0 and 100", [
        { text: "OK" },
      ]);
    } else {
      setScreen("Game");

      onGameStart();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={number}
          onChangeText={(value) => setNumber(value)}
        />
        <View style={styles.buttonsBox}>
          <View style={styles.buttonBox} marginRight={20}>
            <Button title="Reset" onPress={() => setNumber("")} />
          </View>
          <View style={styles.buttonBox}>
            <Button title="Confirm" onPress={onConfirm} />
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
  inputBox: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: colors.primaryDark,
    borderRadius: 8,
  },
  input: {
    width: 70,
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: colors.secondaryLight,
    fontSize: 30,
    color: "white",
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
    width: 130,
  },
});
