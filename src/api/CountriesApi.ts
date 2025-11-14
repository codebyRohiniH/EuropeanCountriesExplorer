import { Country } from "../types/country";

export const fetchEuropeanCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    "https://restcountries.com/v3.1/region/europe"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch European countries");
  }
  const data: Country[] = await response.json();

  return data;
};
