import React from 'react';
import { render, screen } from '@testing-library/react-native';
import EmptyListComponent from '../EmptyListComponent';

describe('EmptyListComponent', () => {
  it('should match snapshot', () => {
    // GIVEN // WHEN
   render(<EmptyListComponent />);
    // THEN
    expect(screen).toMatchSnapshot();
  });
});
