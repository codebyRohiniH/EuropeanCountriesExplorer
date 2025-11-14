import { useEffect, useState, useMemo } from "react";
import { fetchEuropeanCountries } from "../api/CountriesApi";
import { Country } from "../types/country";

export const useEuropeanCountries = () => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [nameSearch, setNameSearch] = useState<string>("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchEuropeanCountries();
        setAllCountries(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, []);

  const countries = useMemo(() => {
    if (!nameSearch.trim()) return allCountries;

    const text = nameSearch.toLowerCase();
    return allCountries.filter((c) =>
      c.name.common.toLowerCase().startsWith(text)
    );
  }, [nameSearch, allCountries]);

  return {
    countries,
    loading,
    error,
    nameSearch,
    setNameSearch,
  };
};
