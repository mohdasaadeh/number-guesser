import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import { colors } from "../constants";

export const Button = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: colors.primaryMedium,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
