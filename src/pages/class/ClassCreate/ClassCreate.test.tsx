import { cleanup, render } from '@testing-library/react';
import { ClassCreate } from './ClassCreate';

describe('ClassCreate', () => {
	afterEach(cleanup);

	it.skip('should render', () => {
		const { asFragment, queryByText, queryAllByText } = render(<ClassCreate />);
		expect(asFragment()).toMatchSnapshot();
		expect(queryAllByText('Fecha de la clase').length).not.toBe(0);
		expect(queryByText('Duracion')).toBeTruthy();
	});
});
