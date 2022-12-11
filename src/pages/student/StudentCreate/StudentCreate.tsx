/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Box, Fab, FormControl, Paper, styled, TextField } from '@mui/material';
import { useState } from 'react';
import { IStudent } from '../../../interfaces/Domain';
import { IStudentCreateDto } from '../../../interfaces/DTO';
import StudentService from '../../../services/FirebaseServices/entityServices/StudentService';
import NavigationIcon from '@mui/icons-material/Navigation';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const FormControlCustom = styled(FormControl)(({ theme }) => ({
	margin: theme.spacing(1),
	minWidth: 120,
}));

const StudentCreate: React.FunctionComponent = () => {
	const studentDtoInitState: IStudentCreateDto = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		birthDate: '',
		dni: '',
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
		const service = new StudentService();
		const student: IStudent = {
			firstName: studentState.firstName,
			lastName: studentState.lastName,
			email: studentState.email,
			phone: studentState.phone,
		};
		console.log('student no creado', student);

		service
			.create(student)
			.then(result => {
				alert('usuario creado');
				console.log('student creado', result);
			})
			.catch(error => {
				console.log('error', error);
			});
	};

	return (
		<Box sx={{ flexGrow: 0, padding: 1, height: '85vh' }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid sm={4} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
					<Item>sidebar</Item>
				</Grid>
				<Grid xs={12} sm={12} md={8} sx={{ height: '100%' }}>
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
				</Grid>
			</Grid>
		</Box>
	);
};

export default StudentCreate;

/*
<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid xs={12}>
					<>
						<h1>Home</h1>
						<p>Welcome to StudentCreate!</p>
					</>
				</Grid>
				<form onSubmit={handleSubmit}>
					<Grid xs={6}>
						<FormControl>
							<TextField
								id='firstName'
								label='Nombre'
								variant='standard'
								name='firstName'
							/>
						</FormControl>

						<FormControl>
							<TextField
								id='lastName'
								label='Apellido'
								variant='standard'
								name='lastName'
							/>
						</FormControl>
					</Grid>
					<Grid xs={6}>
						<FormControl>
							<TextField
								id='email'
								label='Email'
								variant='standard'
								name='email'
								type='email'
							/>
						</FormControl>

						<FormControl>
							<TextField
								id='phone'
								label='Telefono'
								variant='standard'
								name='phone'
								type='number'
							/>
						</FormControl>
					</Grid>
					<Grid xs={6}>
						<FormControl>
							<TextField
								id='dni'
								label='Dni'
								variant='standard'
								name='dni'
								type='number'
							/>
						</FormControl>

						<FormControl>
							<TextField
								id='birthDate'
								// label='Fecha Nacimiento'
								variant='standard'
								name='birthDate'
								type='date'
							/>
						</FormControl>
					</Grid>
					<Fab
						variant='extended'
						color='primary'
						sx={{ position: 'absolute', bottom: 36, right: 36 }}
					>
						<NavigationIcon sx={{ mr: 1 }} />
						Guardar
					</Fab>
				</form>
			</Grid>
		</Box>
		*/
