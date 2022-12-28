import { cleanup, render } from '@testing-library/react';
import ClassCreate from './ClassCreate';

describe('ClassCreate', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText, queryAllByText } = render(<ClassCreate />);
		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Alumno')).toBeTruthy();
		expect(queryByText('Lenguaje de Programacion')).toBeTruthy();
		expect(queryAllByText('Fecha de la clase').length).not.toBe(0);
		expect(queryAllByText('Hora de inicio de la clase').length).not.toBe(0);
		expect(queryByText('Duracion')).toBeTruthy();
		expect(queryByText('Guardar')).toBeTruthy();
	});
});
