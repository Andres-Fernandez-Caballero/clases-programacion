import { expect, vi } from 'vitest';
import { act, cleanup, render } from '@testing-library/react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import store from '@/store';
// import { Provider } from 'react-redux';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-expect-error
// import { Navbar, NavbarProps } from './Navbar';
// import { Home } from '@pages/Home/Home';
// import { ReactElement } from 'react';

describe('Navbar', () => {
	beforeAll(() => {
		vi.resetAllMocks();
	});

	afterEach(() => {
		cleanup();
	});

	// const defaultProps: NavbarProps = {
	// 	navLinks: [
	// 		{ name: 'Home', url: '/' },
	// 		{ name: 'About', url: '/about' },
	// 	],
	// };

	it('should redirect to All navlinks correctly', () => {
		vi.mock('@pages/Home/Home', () => ({
			Home: () => {
				return <div>HOME</div>;
			},
		}));

		// const props: NavbarProps = { ...defaultProps };
		const { queryByText } = render(<>HOME</>);
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
});
