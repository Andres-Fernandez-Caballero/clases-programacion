import { TextField } from '@mui/material';
import { useState } from 'react';
import { programingLanguages } from '../../../constants/programingLanguages';
import { IProgramingLeanguaje } from '../../../interfaces/Domain';
import { IClassCreateDto } from '../../../interfaces/DTO';
import { FormControlCustom } from '../../../styled/Forms.styled';

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
					{programingLanguages.map((language: IProgramingLeanguaje) => (
						<option key={language.name} value={language.name}>
							{language.name}
						</option>
					))}
				</select>

				<FormControlCustom>
					<TextField
						id='date'
						label='Fecha de la clase'
						name='date'
						type='date'
						onChange={handleDateChange}
					/>
				</FormControlCustom>

				<FormControlCustom>
					<TextField
						id='time'
						label='Hora de inicio de la clase'
						name='time'
						type='time'
						onChange={handleTimeChange}
					/>
				</FormControlCustom>

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
