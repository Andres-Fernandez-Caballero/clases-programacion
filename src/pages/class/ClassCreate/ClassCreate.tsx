import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import FormLayout from '../../../components/layers/FormLayout';
import RangeSelectorInput from '../../../components/RangeSelectorInput';
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
			<FormLayout>
				<h1>classCreate</h1>

				<form onSubmit={handleSubmit}>
					<Grid2 container spacing={2}>
						<Grid2 xs={12} md={4}>
							<FormControlCustom>
								<TextField
									id='alumno'
									label='Alumno'
									variant='standard'
									name='alumno'
									onChange={undefined}
								/>
							</FormControlCustom>
						</Grid2>
						<Grid2 xs={12} md={4}>
							<Box sx={{ width: 250 }}>
								<FormControl fullWidth>
									<InputLabel id='demo-simple-select-label'>
										Lenguaje de Programacion
									</InputLabel>
									<Select
										labelId='demo-simple-select-label'
										id='demo-simple-select'
										value=''
										label='Lenguaje'
										onChange={undefined}
									>
										{programingLanguages.map(
											(language: IProgramingLeanguaje) => (
												<MenuItem key={language.name} value={language.name}>
													{language.name}
												</MenuItem>
											)
										)}
									</Select>
								</FormControl>
							</Box>
						</Grid2>
						<Grid2 xs={12} md={4}>
							<p>Duracion</p>
							<RangeSelectorInput
								onChange={handleDurationChange}
								rangeMax={5}
								step={0.5}
								defaultValue={2}
							/>
						</Grid2>
						<Grid2 xs={12} md={6}>
							<FormControlCustom>
								<TextField
									id='date'
									label='Fecha de la clase'
									name='date'
									type='date'
									onChange={handleDateChange}
								/>
							</FormControlCustom>
						</Grid2>
						<Grid2 xs={12} md={6}>
							<FormControlCustom>
								<TextField
									id='time'
									label='Hora de inicio de la clase'
									name='time'
									type='time'
									onChange={handleTimeChange}
								/>
							</FormControlCustom>
						</Grid2>

						<button type='submit' className='btn btn-primary'>
							Guardar
						</button>
					</Grid2>
				</form>
			</FormLayout>
		</>
	);
};
export default ClassCreate;
