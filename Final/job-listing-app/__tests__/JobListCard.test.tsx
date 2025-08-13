import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobListCard from '../src/app/components/JobListCard';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
describe('JobListCard', () => {
  it('renders job card with all required fields', () => {
    const job = {
      id: '1',
      title: 'Frontend Developer',
      opType: '',
      description: 'A frontend job',
      responsibilities: 'Do frontend stuff',
      idealCandidate: '',
      whenAndWhere: '',
      datePosted: '',
      deadline: '',
      startDate: '',
      endDate: '',
      location: ['Remote'],
      categories: ['Tech', 'Remote'],
      requiredSkills: [],
      orgName: 'TestOrg',
      logoUrl: '',
      applicantsCount: 0,
      viewsCount: 0,
      status: 'open',
      isBookmarked: false,
      isPaid: false,
      engagementType: '',
      paymentOption: {
        currency: 'USD',
        paymentType: 'monthly',
      },
    };
    render(
      <Provider store={store}>
        <SessionProvider session={null}>
          <JobListCard {...job} />
        </SessionProvider>
      </Provider>
    );
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('TestOrg . Remote')).toBeInTheDocument();
    expect(screen.getByText('A frontend job')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
    expect(screen.getByText('Remote')).toBeInTheDocument();
  });
});
