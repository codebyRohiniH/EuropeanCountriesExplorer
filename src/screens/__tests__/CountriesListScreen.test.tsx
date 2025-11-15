import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CountriesListScreen from '../CountriesListScreen';
import { useEuropeanCountries } from "../../hooks/useEuropeanCountries";

jest.mock("../../hooks/useEuropeanCountries", () => ({
  useEuropeanCountries: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));
describe("CountriesListScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show the loading indicator when loading=true", () => {
    // GIVEN
    (useEuropeanCountries as jest.Mock).mockReturnValue({
      countries: [],
      loading: true,
      error: "",
      nameSearch: "",
      setNameSearch: jest.fn(),
    });
    // WHEN
    const { getByTestId } = render(<CountriesListScreen />);

    // THEN
    expect(getByTestId("loading-indicator")).toBeTruthy();
  });

  it("should show the error message when error is present", () => {
    // GIVEN
    (useEuropeanCountries as jest.Mock).mockReturnValue({
      countries: [],
      loading: false,
      error: "Failed to fetch countries",
      nameSearch: "",
      setNameSearch: jest.fn(),
    });

    // WHEN
    const { getByTestId } = render(<CountriesListScreen />);

    // THEN
    expect(getByTestId("error-message")).toBeTruthy();
  });

  it("should match snapshot", () => {
    // WHEN
    render(<CountriesListScreen />);
    // THEN
    expect(screen).toMatchSnapshot();
  });
});
