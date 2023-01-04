import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import FormLayout from '../../../components/layers/FormLayout';
import RangeSelectorInput from '../../../components/RangeSelectorInput';
import { programingLanguages } from '../../../constants/programingLanguages';
import { IProgramingLeanguaje, IStudent } from '../../../interfaces/Domain';
import { IClassCreateDto } from '../../../interfaces/DTO';
import StudentService from '../../../services/FirebaseServices/entityServices/StudentService';
import { FormControlCustom } from '../../../styled/Forms.styled';

const ClassCreate: React.FunctionComponent = () => {
	const classDtoInitState: IClassCreateDto = {
		date: '',
		time: '',
		duration: 1,
		programingLanguageName: '',
		studentDni: '',
	};

	const [classState, setClassState] = useState(classDtoInitState);
	const [students, setStudents] = useState([] as IStudent[]);
	useEffect(() => {
		const serviceStudent = new StudentService();
		serviceStudent
			.getAll()
			.then((studentFromDatabase: IStudent[]) => {
				setStudents(studentFromDatabase);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	const handleOnChangeProgramingLeanguaje = (event: SelectChangeEvent) => {
		setClassState({
			...classState,
			programingLanguageName: event.target.value,
		});
	};

	const handleOnChangeStudent = (event: SelectChangeEvent) => {
		setClassState({
			...classState,
			studentDni: event.target.value,
		});
	};

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClassState({
			...classState,
			[event.target.name]: event.target.value,
		});
		console.table(classState);
	};

	const handleChangeRange = (event: Event, newValue: number | number[]) => {
		setClassState({
			...classState,
			duration: newValue,
		});
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
							<Box sx={{ width: 250 }}>
								<FormControl fullWidth>
									<InputLabel id='alumno-select-label'>Alumno</InputLabel>
									<Select
										labelId='alumno-select-label'
										id='alumno-select'
										value={classState.studentDni}
										label='Alumno'
										onChange={handleOnChangeStudent}
									>
										{students.map((student: IStudent) => (
											<MenuItem key={student.id} value={student.dni}>
												{`${student.firstName} ${student.lastName} DNI: ${student.dni}`}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Box>
						</Grid2>
						<Grid2 xs={12} md={4}>
							<Box sx={{ width: 250 }}>
								<FormControl fullWidth>
									<InputLabel id='leanguaje-select-label'>
										Lenguaje de Programacion
									</InputLabel>
									<Select
										labelId='leanguaje-select-label'
										id='leanguaje-select'
										value={classState.programingLanguageName}
										label='Lenguaje de Programacion'
										onChange={handleOnChangeProgramingLeanguaje}
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
								onChange={handleChangeRange}
								rangeMax={5}
								step={0.5}
								value={classState.duration}
							/>
						</Grid2>
						<Grid2 xs={12} md={6}>
							<FormControlCustom>
								<TextField
									id='date'
									label='Fecha de la clase'
									name='date'
									type='date'
									onChange={handleOnChange}
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
									onChange={handleOnChange}
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
