import { cleanup, render } from '@testing-library/react';
import Navbar, { NavbarProps } from './Navbar';
import { expect } from 'vitest';

describe('Navbar', () => {
	afterEach(cleanup);
	const defaultProps: NavbarProps = {
		navLinks: [
			{ name: 'Home', url: '/' },
			{ name: 'About', url: '/about' },
		],
	};

	it('should render', () => {
		const props = { ...defaultProps };
		const { asFragment, queryByText } = render(<Navbar {...props} />);
		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Navbar')).toBeTruthy();
	});
});
