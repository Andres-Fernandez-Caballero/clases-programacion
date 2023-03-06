import React from 'react';
import { StudentCreate } from './StudentCreate';
import StudentService from '@services/FirebaseServices/entityServices/StudentService';
import { IStudentFirebaseEntity } from '@interfaces/FirebaseEntitys';
import { message, messageError } from '@components/Toast';
import FormLayout from '@components/layers/FormLayout';
import { useDtoStudentCreate } from '@pages/student/StudentCreate/StudentCreate.hook';
import { useNavigate } from 'react-router-dom';
import { URL } from '@constants/routes';

const ComponentStudentCreate = () => {
	const { studentState, handleOnChange, resetForm } = useDtoStudentCreate();
	const navigate = useNavigate();
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const studentService = new StudentService();
		studentService
			.create(studentState)
			.then((student: IStudentFirebaseEntity) => {
				console.log(student);
				message('Estudiante creado correctamente');
				navigate(URL.STUDENT);
			})
			.catch(error => {
				messageError(error.message);
			})
			.finally(() => {
				resetForm();
			});
	};
	return (
		<FormLayout>
			<StudentCreate onSubmit={handleSubmit} onChange={handleOnChange} />
		</FormLayout>
	);
};

export default ComponentStudentCreate;
