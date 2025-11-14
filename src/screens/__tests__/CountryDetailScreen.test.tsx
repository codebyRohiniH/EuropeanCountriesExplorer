import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CountryDetailScreen from '../CountryDetailScreen';

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      country: {
        name: { common: 'Testland' },
        capital: ['Test City'],
        population: 123456,
        area: 7890,
        flags: { png: 'https://test.com/flag.png' },
      },
    },
  }),
}));

describe('CountryDetailScreen', () => {
  it('should match snapshot', () => {
    // GIVEN // WHEN
    render(<CountryDetailScreen />);
    // THEN
    expect(screen).toMatchSnapshot();
  });
});
