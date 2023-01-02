/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Fab, FormControl, styled, TextField } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import { messageError } from '../../../components/Toast';
import { IStudentCreateDto } from '../../../interfaces/DTO';
import StudentService from '../../../services/FirebaseServices/entityServices/StudentService';
import NavigationIcon from '@mui/icons-material/Navigation';
import FormLayout from '../../../components/layers/FormLayout';
import { IStudentFirebaseEntity } from '../../../interfaces/FirebaseEntitys';

const FormControlCustom = styled(FormControl)(({ theme }) => ({
	margin: theme.spacing(1),
	minWidth: 120,
}));

const StudentCreate: React.FunctionComponent = () => {
	const studentDtoInitState: IStudentCreateDto = {
		firstName: '',
		lastName: '',
		dni: '',
		email: '',
		phone: '',
		birthDate: '',
	};

	const [studentState, setStudentState] = useState(studentDtoInitState);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStudentState({
			...studentState,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const studentService = new StudentService();
		studentService
			.create({
				...studentState,
				birthDate: moment(studentState.birthDate),
			})
			.then((student: IStudentFirebaseEntity) => {
				console.log(student);
			})
			.catch(error => {
				messageError(error.message);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControlCustom>
				<TextField
					id='firstName'
					label='Nombre'
					variant='standard'
					name='firstName'
					onChange={handleOnChange}
				/>
			</FormControlCustom>

			<FormControlCustom>
				<TextField
					id='lastName'
					label='Apellido'
					variant='standard'
					name='lastName'
					onChange={handleOnChange}
				/>
			</FormControlCustom>

			<FormControlCustom>
				<TextField
					id='email'
					label='Email'
					variant='standard'
					name='email'
					type='email'
					onChange={handleOnChange}
				/>
			</FormControlCustom>

			<FormControlCustom>
				<TextField
					id='phone'
					label='Telefono'
					variant='standard'
					name='phone'
					type='number'
					onChange={handleOnChange}
				/>
			</FormControlCustom>

			<FormControlCustom>
				<TextField
					id='dni'
					label='Dni'
					variant='standard'
					name='dni'
					type='number'
					onChange={handleOnChange}
				/>
			</FormControlCustom>

			<FormControlCustom>
				<TextField
					id='birthDate'
					label='Fecha Nacimiento'
					name='birthDate'
					type='date'
					onChange={handleOnChange}
				/>
			</FormControlCustom>

			<Fab
				variant='extended'
				type='submit'
				color='primary'
				sx={{ position: 'absolute', bottom: 36, right: 36 }}
			>
				<NavigationIcon sx={{ mr: 1 }} />
				Guardar
			</Fab>
		</form>
	);
};

export const componentStudentCreate = () => (
	<FormLayout>
		<StudentCreate />
	</FormLayout>
);
