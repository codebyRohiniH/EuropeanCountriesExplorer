import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CountriesListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Countries List screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CountriesListScreen;