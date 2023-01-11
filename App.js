import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { NumberScreen } from "./src/screens/NumberScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NumberScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
