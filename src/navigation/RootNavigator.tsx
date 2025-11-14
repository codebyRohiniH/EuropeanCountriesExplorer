import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import CountriesListScreen from "../screens/CountriesListScreen";
import CountryDetailScreen from "../screens/CountryDetailScreen";
import { Country } from "../types/country";

export type RootNavigationProp<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>;

export type RootStackParamList = {
  CountriesList: undefined;
  CountryDetail: { country: Country };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CountriesList"
        component={CountriesListScreen}
        options={{ title: "European Countries" }}
      />
      <Stack.Screen
        name="CountryDetail"
        component={CountryDetailScreen}
        options={({ route }) => {
          const countryName =
            route.params?.country?.name?.common ?? "Country Detail";
          return {
            title: countryName,
            headerBackTitle: "Back",
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
