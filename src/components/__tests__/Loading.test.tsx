import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Loading from '../Loading';

describe('Loading', () => {
  it('should match snapshot', () => {
    // GIVEN // WHEN
     render(<Loading />);
    // THEN
    expect(screen).toMatchSnapshot();
  });
});
