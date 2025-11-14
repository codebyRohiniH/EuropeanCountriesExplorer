import { Country } from "../types/country";

export const fetchEuropeanCountries = async (): Promise<Country[]> => {
  const params = new URLSearchParams({
    fields: "name,flags,capital,population,area",
  });
  const url = `https://restcountries.com/v3.1/region/europe?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch European countries");
  }
  const data: Country[] = await response.json();

  return data;
};
