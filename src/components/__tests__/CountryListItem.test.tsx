import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CountryListItem from '../CountryListItem';

// GIVEN
const country = {
  name: { common: 'Test name' },
  capital: ['Test City'],
  population: 123456,
  area: 7890,
  flags: { png: 'https://test.com/flag.png' },
};
const onPress = jest.fn();

describe('CountryListItem', () => {
  it('should match snapshot', () => {
    // WHEN 
    render(<CountryListItem country={country} onPress={onPress} />);
    // THEN
    expect(screen).toMatchSnapshot();
  });
});
