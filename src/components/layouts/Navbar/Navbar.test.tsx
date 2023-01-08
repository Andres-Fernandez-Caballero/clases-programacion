/* eslint-disable react/jsx-no-undef */
import Navbar, { NavbarProps } from './Navbar';
import { expect, vi } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
	act,
	cleanup,
	// fireEvent,
	// queryByText,
	render,
} from '@testing-library/react';
// import { About } from '../../../pages/About/About';
import { Home } from '../../../pages/Home/Home';
// import { navBarLinks } from '../../../constants/navLinks';
// import { act } from 'react-dom/test-utils';

describe('Navbar', () => {
	beforeAll(() => {
		vi.resetAllMocks();
	});

	afterEach(() => {
		cleanup();
	});

	const defaultProps: NavbarProps = {
		navLinks: [
			{ name: 'Home', url: '/' },
			{ name: 'About', url: '/about' },
		],
	};

	it('should redirect to All navlinks correctly', () => {
		vi.mock('../../../pages/Home/Home', () => ({
			Home: () => {
				return <div>HOME</div>;
			},
		}));

		const props = { ...defaultProps };
		const { queryByText } = render(
			<Router>
				<Navbar {...props} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<h1>About</h1>} />
				</Routes>
			</Router>
		);
		// expect(false).toBe(true);
		// expect(asFragment()).toMatchSnapshot();
		act(() => {
			expect(queryByText('HOME')).toBeTruthy();

			//	fireEvent.click(queryByTestId('About'));
			//	queryByText('PEPE');
			// fireEvent.click(queryAllByTestId('Home')[0] as Element);
			//	queryByText('HOME');
		});
	});

	it('should render', () => {
		const props = { ...defaultProps };
		const { asFragment, queryByText } = render(
			<Router>
				<Navbar {...props} />
			</Router>
		);
		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Navbar')).toBeTruthy();
	});
});
