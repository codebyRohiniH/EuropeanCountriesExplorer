import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  it('should match snapshot', () => {
    // GIVEN // WHEN
    render(<ErrorMessage error="Something went wrong" />);
    // THEN
    expect(screen).toMatchSnapshot();
  });
});
