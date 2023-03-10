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

import moment from 'moment';
import React, { ChangeEvent, useEffect, useState } from 'react';
import FabSubmit from '@components/FabSubmit';
import FormLayout from '@components/layers/FormLayout';
import RangeSelectorInput from '@components/RangeSelectorInput';
import { programingLanguages } from '@constants/programingLanguages';
import { IProgramingLeanguaje, IStudent } from '@interfaces/Domain';
import {
	IClassFirebaseEntity,
	IStudentFirebaseEntity,
	ITicketFirebaseEntity,
} from '@interfaces/FirebaseEntitys';
import ClassService from '@services/FirebaseServices/entityServices/ClassService';
import StudentService from '@services/FirebaseServices/entityServices/StudentService';
import { FormControlCustom } from '@styled/Forms.styled';
import { CLASS_PRICE } from '@constants/price';
import DialogTicket from '@components/DialogTicket';
import { useAppDispatch } from '@store/hooks/hook';
import { addTicket } from '@slyces/ticket.slice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ClassCreate: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
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

	const openDoalogTicket = () => {
		setPopUpVisible(true);
	};
	const handleClose = () => {
		setPopUpVisible(false);
	};

	const handleOnChangePrice = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setPrice(Number(event.target.value));
	};

	const handleOnPriceOff = (DiscountPercentage: number) => {
		setPrice(price * (1 - DiscountPercentage / 100));
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

	const handleOnConfirm = () => {
		const classService = new ClassService();
		const newTicket: ITicketFirebaseEntity = {
			amount: price * classState.duration,
			date: moment().format('YYYY-MM-DD'),
			class: classState,
			isPaid: false,
		};
		const toastRef = toast.loading('Procesando datos...');
		Promise.allSettled([
			classService.create(classState),
			dispatch(addTicket(newTicket)),
		])
			.then(() => {
				toast.update(toastRef, {
					render: 'Clase almacenada con exito ',
					type: 'success',
					isLoading: false,
					autoClose: 1500,
				});
				navigate('/');
			})
			.catch(() => {
				toast.update(toastRef, {
					render: 'Error al guardar la clase',
					type: 'error',
					isLoading: false,
					autoClose: 1500,
				});
			});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		openDoalogTicket();
	};

	return (
		<>
			<DialogTicket
				popUpVisible={popUpVisible}
				handleClose={handleClose}
				handleChangePrice={handleOnChangePrice}
				handleOnPriceOff={handleOnPriceOff}
				handleOnConfirm={handleOnConfirm}
				price={price}
				classState={classState}
			/>
			<FormLayout>
				<form onSubmit={handleSubmit}>
					<Grid2 container spacing={{ md: 10 }}>
						<Grid2 xs={12} md={6}>
							<Box>
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
						<Grid2 xs={12} md={6}>
							<Box>
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
						<Grid2 xs={12} md={6}>
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
						<FabSubmit />
					</Grid2>
				</form>
			</FormLayout>
		</>
	);
};
