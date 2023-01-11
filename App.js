import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { GameStartScreen } from "./src/screens";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <GameStartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
