import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function EmptyListComponent() {
  return (
    <Text variant="bodyLarge" style={styles.emptyListText}>
      No countries found.
    </Text>
  );
}

const styles = StyleSheet.create({  
  emptyListText: {
    textAlign: "center",
    marginTop: 20,
  },
});
    