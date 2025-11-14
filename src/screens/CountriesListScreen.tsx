// src/screens/CountriesListScreen.tsx
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Country } from "../types/country";
import { fetchEuropeanCountries } from "../api/CountriesApi";

type Props = NativeStackScreenProps<RootStackParamList, "CountriesList">;

const CountriesListScreen: React.FC<Props> = ({ navigation }) => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

 useEffect(() => {
   const getCountries = async () => {
     try {
       const data = await fetchEuropeanCountries();
       setCountries(data);
     } catch (error: any) {
       setError(error.message);
     } finally {
       setLoading(false);
     }
   };
   getCountries();
 }, []);


  if (loading) return <ActivityIndicator style={styles.loader} size="large" />;
  if (error) return <Text style={styles.error}>{error}</Text>;


  return (
    <FlatList
      data={countries}
      renderItem={({ item }) => (
        <Text
          onPress={() =>
            navigation.navigate("CountryDetail", { country: item })
          }
        >
          {item.name.common}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  error: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
});

export default CountriesListScreen;
