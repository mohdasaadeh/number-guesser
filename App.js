import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameStartScreen, GameScreen, GameOverScreen } from "./src/screens";
import { colors } from "./src/constants";

const guessNumber = (min, max, exclude) => {
  const guessedNumber = Math.floor(Math.random() * (max - min) + min);

  if (guessedNumber === exclude) {
    return guessNumber(min, max, guessedNumber);
  } else {
    return guessedNumber;
  }
};

export default function App() {
  const [screen, setScreen] = useState("GameStart");
  const [number, setNumber] = useState("");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [guessedNumber, setGuessedNumber] = useState();
  const [guessCount, setGuessCount] = useState([]);

  const onGameStart = () => {
    const guessedNumber = guessNumber(min, max, number);

    setGuessedNumber(guessedNumber);
    setGuessCount([...guessCount, guessedNumber]);
  };

  const onGameOver = () => {
    setNumber("");
    setGuessedNumber();
    setScreen("GameStart");
    setMin(1);
    setMax(100);
    setGuessCount([]);
  };

  useEffect(() => {
    if (guessedNumber) {
      const guessedNumber = guessNumber(min, max, guessedNumber);

      setGuessedNumber(guessedNumber);
      setGuessCount([...guessCount, guessedNumber]);
    }
  }, [min, max]);

  useEffect(() => {
    if (guessedNumber === Number(number)) {
      setScreen("GameOver");
    }
  }, [guessedNumber, number]);

  const renderScreen = () => {
    switch (screen) {
      case "GameStart":
        return (
          <GameStartScreen
            setScreen={setScreen}
            number={number}
            setNumber={setNumber}
            onGameStart={onGameStart}
          />
        );
      case "Game":
        return (
          <GameScreen
            setScreen={setScreen}
            number={number}
            guessedNumber={guessedNumber}
            setMin={setMin}
            setMax={setMax}
          />
        );
      case "GameOver":
        return (
          <GameOverScreen
            guessedNumber={guessedNumber}
            guessCount={guessCount}
            onGameOver={onGameOver}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[colors.primaryMedium, colors.secondaryMedium]}
        style={styles.background}
      />
      <ImageBackground
        source={require("./assets/dice.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
