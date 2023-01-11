import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Button = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#9d0208",
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
