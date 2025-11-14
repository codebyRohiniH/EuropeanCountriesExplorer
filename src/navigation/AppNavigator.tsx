import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountriesListScreen from "../screens/CountriesListScreen";
import CountryDetailScreen from "../screens/CountryDetailScreen";
import { Country } from "../types/country";


export type RootStackParamList = {
  CountriesList: undefined;
  CountryDetail: { country: Country };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CountriesList"
        component={CountriesListScreen}   
      />
      <Stack.Screen
        name="CountryDetail"
        component={CountryDetailScreen} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
