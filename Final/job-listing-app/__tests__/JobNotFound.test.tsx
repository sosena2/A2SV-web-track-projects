import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobNotFound from '../src/app/components/JobNotFound';

describe('JobNotFound', () => {
  it('renders not found message', () => {
    render(<JobNotFound />);
    expect(screen.getByText('Job Not Found')).toBeInTheDocument();
    expect(screen.getByText(/does not exist or has been removed/i)).toBeInTheDocument();
  });
});
