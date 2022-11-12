import { cleanup, render } from '@testing-library/react';
import ClassCreate from './ClassCreate';

describe('ClassCreate', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<ClassCreate />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('classCreate')).toBeTruthy();
	});
});
