import moment from 'moment';
import { useState } from 'react';
import { message, messageError } from '../../../components/Toast';
import { IStudent } from '../../../interfaces/Domain';
import { IStudentCreateDto } from '../../../interfaces/DTO';
import { IStudentFirebaseEntity } from '../../../interfaces/FirebaseEntitys';
import StudentService from '../../../services/FirebaseServices/entityServices/StudentService';

const StudentCreate: React.FunctionComponent = () => {
	const studentDtoInitState: IStudentCreateDto = {
		firstName: '',
		lastName: '',
		dni: '',
		email: '',
		phone: '',
		birthday: '',
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
			dni: studentState.dni,
			birthday: moment(studentState.birthday),
			email: studentState.email,
			phone: studentState.phone,
		};

		service
			.create(student)
			.then((result: IStudentFirebaseEntity) => {
				message(result.firstName);
			})
			.catch(error => {
				messageError('Se produjo un error al crear el estudiante');
				console.log('error', error);
			});
	};

	return (
		<>
			<h1>Home</h1>
			<p>Welcome to StudentCreate!</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor='firstName'>Nombre</label>
				<input
					type='text'
					name='firstName'
					id='firstName'
					onChange={handleOnChange}
				/>

				<label htmlFor='lastName'>Apellido</label>
				<input
					type='text'
					name='lastName'
					id='lastName'
					onChange={handleOnChange}
				/>

				<label htmlFor='dni'>Dni</label>
				<input type='text' name='dni' id='dni' onChange={handleOnChange} />

				<label htmlFor='birthday'>Fecha de Nacimiento</label>
				<input
					type='date'
					name='birthday'
					id='birthday'
					onChange={handleOnChange}
				/>

				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' onChange={handleOnChange} />

				<label htmlFor='phone'>Telefono</label>
				<input type='tel' name='phone' id='phone' onChange={handleOnChange} />

				<button type='submit'>Guardar</button>
			</form>
		</>
	);
};

export default StudentCreate;
