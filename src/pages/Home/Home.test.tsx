import { cleanup, render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<Home />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Home')).toBeTruthy();
	});
});
