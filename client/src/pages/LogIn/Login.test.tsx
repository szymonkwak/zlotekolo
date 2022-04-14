import React from 'react';
import { render, screen } from '~/tests/utils';
import '@testing-library/jest-dom';
import { LogIn } from './LogIn';

describe('LogIn component', () => {
  describe('button', () => {
    it('is not disabled', () => {
      render(<LogIn />);
      const loginButton = screen.getByText('Kontynuuj przez Google');
      expect(loginButton).not.toBeDisabled();
    });
  });
});