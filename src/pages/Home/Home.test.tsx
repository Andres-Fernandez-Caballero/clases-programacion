import store from '@/store';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Home } from './Home';
import { expect } from 'vitest';
import moment from 'moment';
import { MONTHS } from '@constants/date';

describe('Home', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('clases Facturadas en')).toBeTruthy();

		const currentMonth = MONTHS[moment().month()];
		expect(queryByText(currentMonth)).toBeTruthy();
	});
});
