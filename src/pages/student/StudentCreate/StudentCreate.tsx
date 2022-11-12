import { useState } from 'react';
import { IStudent } from '../../../interfaces/Domain';
import { IStudentCreateDto } from '../../../interfaces/DTO';
import StudentService from '../../../services/FirebaseServices/entityServices/StudentService';

const StudentCreate: React.FunctionComponent = () => {
	const studentDtoInitState: IStudentCreateDto = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
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
				console.log('student creado', result);
			})
			.catch(error => {
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
