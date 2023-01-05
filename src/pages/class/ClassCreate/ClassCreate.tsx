import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Slide,
	TextField,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import FabSubmit from '../../../components/FabSubmit';
import FormLayout from '../../../components/layers/FormLayout';
import RangeSelectorInput from '../../../components/RangeSelectorInput';
import { programingLanguages } from '../../../constants/programingLanguages';
import { IProgramingLeanguaje, IStudent } from '../../../interfaces/Domain';
import { TransitionProps } from '@mui/material/transitions';
import {
	IClassFirebaseEntity,
	IStudentFirebaseEntity,
} from '../../../interfaces/FirebaseEntitys';
import ClassService from '../../../services/FirebaseServices/entityServices/ClassService';
import StudentService from '../../../services/FirebaseServices/entityServices/StudentService';
import { FormControlCustom } from '../../../styled/Forms.styled';
import { CLASS_PRICE } from '../../../constants/price';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<
			unknown,
			string | React.JSXElementConstructor<unknown>
		>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const ClassCreate: React.FunctionComponent = () => {
	const classDtoInitState: IClassFirebaseEntity = {
		dateTime: moment().format('YYYY-MM-DDTHH:mm'),
		duration: 1,
		programingLeanguage: { name: '' },
		student: {
			dni: moment().format('YYYYMMDDHHmmss'),
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			birthDate: '',
		},
	};

	const [classState, setClassState] = useState(classDtoInitState);
	const [students, setStudents] = useState([] as IStudent[]);
	const [popUpVisible, setPopUpVisible] = useState(false);
	const [price, setPrice] = useState(CLASS_PRICE);

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

	const handleClickOpen = () => {
		setPopUpVisible(true);
	};
	const handleClose = () => {
		setPopUpVisible(false);
	};

	const handleOnChangeProgramingLeanguaje = (event: SelectChangeEvent) => {
		setClassState({
			...classState,
			programingLeanguage: { name: event.target.value },
		});
	};

	const handleOnChangeStudent = (event: SelectChangeEvent) => {
		const studentFind = students.find(
			(student: IStudent) => student.dni === event.target.value
		);

		setClassState({
			...classState,
			student:
				studentFind !== undefined
					? studentFind
					: {
							dni: '',
							firstName: '',
							lastName: '',
							email: '',
							phone: '',
							birthDate: '',
					  },
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
			duration: newValue as number,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const valorDelaClase = prompt('Ingrese el valor de la clase');
		const serviceClass = new ClassService();
		serviceClass
			.create(classState)
			.then((classFromDatabase: IClassFirebaseEntity) => {
				console.table(classFromDatabase);
				alert('Clase registrada con exito');
				console.log(valorDelaClase);
			})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<>
			<Dialog
				open={popUpVisible}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle>{'Ticket'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='price-input'>
						<TextField
							id='price'
							label='Valor de la clase'
							name='price'
							type='number'
							onChange={event => {
								setPrice(Number(event.target.value));
							}}
							value={price}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose}>Agree</Button>
				</DialogActions>
			</Dialog>

			<FormLayout>
				<h1>Registrar Clase</h1>

				<form onSubmit={handleSubmit}>
					<Grid2 container spacing={2}>
						<Grid2 xs={12} md={4}>
							<Box sx={{ width: 250 }}>
								<FormControl fullWidth>
									<InputLabel id='alumno-select-label'>Alumno</InputLabel>
									<Select
										labelId='alumno-select-label'
										id='alumno-select'
										value={classState.student.dni}
										label='Alumno'
										onChange={handleOnChangeStudent}
									>
										{students.map((student: IStudentFirebaseEntity) => (
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
										label='Lenguaje de Programacion'
										id='leanguaje-select'
										value={classState.programingLeanguage.name}
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
							<FormControlCustom fullWidth>
								<TextField
									id='date'
									label='Fecha de la clase'
									name='dateTime'
									type='datetime-local'
									onChange={handleOnChange}
									value={classState.dateTime}
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</FormControlCustom>
						</Grid2>
						<Button onClick={handleClickOpen}>open</Button>
						<FabSubmit />
					</Grid2>
				</form>
			</FormLayout>
		</>
	);
};
export default ClassCreate;
