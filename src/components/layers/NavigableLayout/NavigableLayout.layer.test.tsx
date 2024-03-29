import store from '@/store';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
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
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<NavigableLayout {...props} />}>
							<Route index element={<h1>Test</h1>} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Test')).toBeTruthy();
		expect(queryByText('ElectriCat')).toBeTruthy();
	});
});
