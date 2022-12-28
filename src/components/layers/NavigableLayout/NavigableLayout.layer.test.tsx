import { cleanup, render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigableLayout, { NavigableLayoutProps } from './NavigableLayout.layer';

describe('NavigableLayour', () => {
	afterEach(cleanup);
	const defaultProps: NavigableLayoutProps = {
		navBarLinks: [
			{ name: 'Home', url: '/' },
			{ name: 'About', url: '/about' },
		],
	};

	it('should render', () => {
		const props = { ...defaultProps };
		const { asFragment, queryByText } = render(
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<NavigableLayout {...props} />}>
						<Route index element={<h1>Test</h1>} />
					</Route>
				</Routes>
			</BrowserRouter>
		);

		expect(asFragment()).toMatchSnapshot();
		props.navBarLinks.forEach(link => {
			// expect(queryByText(link.name)).toBeTruthy();
		});
		expect(queryByText('Test')).toBeTruthy();
		expect(queryByText('Footer')).toBeTruthy();
	});
});
