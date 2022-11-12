import { cleanup, render } from '@testing-library/react';
import ClassCreate from './ClassCreate';

describe('ClassCreate', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<ClassCreate />);
		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Alumno')).toBeTruthy();
		expect(queryByText('Lenguaje de Programacion')).toBeTruthy();
		expect(queryByText('Fecha')).toBeTruthy();
		expect(queryByText('Hora')).toBeTruthy();
		expect(queryByText('Duracion')).toBeTruthy();
		expect(queryByText('Guardar')).toBeTruthy();
	});
});
