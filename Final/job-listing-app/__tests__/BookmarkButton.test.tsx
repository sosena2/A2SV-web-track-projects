beforeAll(() => {
	window.alert = jest.fn();
});
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookmarkButton from '../src/app/components/Bookmark';

// Mock next-auth and RTK Query hooks
jest.mock('next-auth/react', () => ({
	useSession: () => ({ data: { user: { data: { accessToken: 'token' } } }, status: 'authenticated' }),
}));
jest.mock('../redux/services/bookmarkApi', () => ({
	useAddBookmarkMutation: () => [() => ({ unwrap: () => Promise.resolve() })],
	useRemoveBookmarkMutation: () => [() => ({ unwrap: () => Promise.resolve() })],
}));

describe('BookmarkButton', () => {
	it('renders the bookmark button', () => {
		render(<BookmarkButton eventId="1" initialBookmarked={false} />);
		expect(screen.getByTestId('bookmark-button')).toBeInTheDocument();
	});

	it('renders as bookmarked when initialBookmarked is true', () => {
		render(<BookmarkButton eventId="1" initialBookmarked={true} />);
		expect(screen.getByLabelText('Remove bookmark')).toBeInTheDocument();
	});
	it('renders as not bookmarked when initialBookmarked is false', () => {
		render(<BookmarkButton eventId="1" initialBookmarked={false} />);
		expect(screen.getByLabelText('Add bookmark')).toBeInTheDocument();
	});

	it('toggles bookmark state on click', async () => {
		render(<BookmarkButton eventId="1" initialBookmarked={false} />);
		const button = screen.getByTestId('bookmark-button');
		fireEvent.click(button);
		// After click, should show Remove bookmark (bookmarked)
		expect(await screen.findByLabelText('Remove bookmark')).toBeInTheDocument();
		fireEvent.click(button);
		// After second click, should show Add bookmark (not bookmarked)
		expect(await screen.findByLabelText('Add bookmark')).toBeInTheDocument();
	});
});
