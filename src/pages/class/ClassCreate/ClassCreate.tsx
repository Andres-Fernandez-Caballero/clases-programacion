import { useState } from 'react';
import { IClassCreateDto } from '../../../interfaces/DTO';

const ClassCreate: React.FunctionComponent = () => {
	const classDtoInitState: IClassCreateDto = {
		date: '',
		time: '',
		duration: 1,
	};

	const [classState, setClassState] = useState(classDtoInitState);

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClassState({ ...classState, date: event.target.value });
	};

	const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClassState({ ...classState, time: event.target.value });
	};

	const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClassState({ ...classState, duration: parseInt(event.target.value) });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<h1>classCreate</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Alumno</label>
				<select name='student' id='name'>
					<option value='1'>Juan</option>
					<option value='2'>Pedro</option>
					<option value='3'>Maria</option>
				</select>
				<label htmlFor='course'>Lenguaje de Programacion</label>
				<select name='programingLeanguaje' id='course'>
					<option value='1'>Java</option>
					<option value='2'>C++</option>
					<option value='3'>Python</option>
				</select>

				<label htmlFor='date'>Fecha</label>
				<input type='date' name='date' id='date' onChange={handleDateChange} />

				<label htmlFor='time'>Hora</label>
				<input type='time' name='time' id='time' onChange={handleTimeChange} />

				<label htmlFor='duration'>Duracion</label>
				<input
					type='range'
					name='duration'
					id=''
					onChange={handleDurationChange}
				/>

				<button type='submit'>Guardar</button>
			</form>
		</>
	);
};
export default ClassCreate;
