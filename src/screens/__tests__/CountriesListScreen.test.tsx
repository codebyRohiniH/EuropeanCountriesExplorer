import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CountriesListScreen from '../CountriesListScreen';

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));
describe('CountriesListScreen', () => {
  it('should match snapshot', () => {
    // GIVEN // WHEN
    render(<CountriesListScreen />);
    // THEN
    expect(screen).toMatchSnapshot();
  });
});
