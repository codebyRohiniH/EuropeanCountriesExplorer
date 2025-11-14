import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Text, Card } from "react-native-paper";
import { RootStackParamList } from "../navigation/RootNavigator";

const CountryDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "CountryDetail">>();
  const { country } = route.params;
  const { area, capital, flags, name, population } = country || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card mode="outlined" style={styles.card}>
        <Card.Cover
          source={
            flags?.png
              ? { uri: flags.png }
              : require("../../assets/placeholder.png")
          }
          style={styles.flag}
        />
        <Card.Content style={styles.content}>
          <Text variant="headlineMedium" style={styles.name}>
            {name?.common}
          </Text>
          <Text variant="bodyLarge" style={styles.detail}>
            Capital: {capital?.[0] || "N/A"}
          </Text>
          <Text variant="bodyLarge" style={styles.detail}>
            Population: {population?.toLocaleString()}
          </Text>
          <Text variant="bodyLarge" style={styles.detail}>
            Area: {area?.toLocaleString()} km²
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  card: {
    width: "100%",
    borderRadius: 16,
    elevation: 2,
    backgroundColor: "#eeedecff",
  },

  flag: {
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "flex-start",
  },

  name: {
    fontWeight: "bold",
    marginBottom: 12,
  },

  detail: {
    marginBottom: 8,
  },
});

export default CountryDetailScreen;
