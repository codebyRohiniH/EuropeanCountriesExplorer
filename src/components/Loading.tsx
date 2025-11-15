import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-paper";

const Loading: React.FC = () => {
  return (
    <SafeAreaView testID="loading-indicator" style={styles.center}>
      <ActivityIndicator animating size="large" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading
