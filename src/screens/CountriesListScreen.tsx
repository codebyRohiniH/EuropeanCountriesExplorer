import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import CountryListItem from "../components/CountryListItem";
import { useEuropeanCountries } from "../hooks/useEuropeanCountries";

import { Searchbar } from "react-native-paper";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

type CountriesListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "CountriesList"
>;

const CountriesListScreen: React.FC<CountriesListScreenProps> = ({
  navigation,
}) => {
  const { countries, loading, error, nameSearch, setNameSearch } =
    useEuropeanCountries();

  if (loading) return <Loading />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search countries..."
        onChangeText={setNameSearch}
        value={nameSearch}
        style={styles.searchInput}
      />

      <FlatList
        data={countries}
        keyExtractor={(item) => item.name.common}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CountryListItem
            country={item}
            onPress={() =>
              navigation.navigate("CountryDetail", { country: item })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    margin: 12,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 32,
  },
});

export default CountriesListScreen;
