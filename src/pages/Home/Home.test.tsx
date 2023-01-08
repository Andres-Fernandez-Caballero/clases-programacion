import store from '@/store';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Home } from './Home';

describe('Home', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Bienvenido')).toBeTruthy();
	});
});
