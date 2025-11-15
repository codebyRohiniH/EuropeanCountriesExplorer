import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";

type ErrorMessageProps = {
  error: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <SafeAreaView testID="error-message" style={styles.center}>
      <Text variant="titleLarge" style={styles.errorText}>
        {error}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#ec6b6bff",
  },
});

export default ErrorMessage;
