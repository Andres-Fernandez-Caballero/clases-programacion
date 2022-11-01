import { cleanup, render } from '@testing-library/react';
import { expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<Footer />);
		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Footer')).toBeTruthy();
	});
});
