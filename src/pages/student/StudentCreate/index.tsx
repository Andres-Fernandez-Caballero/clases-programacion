import { StudentCreate } from './StudentCreate';
import FormLayout from '@components/layers/FormLayout';
import { useDtoStudentCreate } from '@pages/student/StudentCreate/StudentCreate.hook';
import { useNavigate } from 'react-router-dom';
import { URL } from '@constants/routes';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@store/hooks/hook';
import { addStudent } from '@slyces/students.slice';
import { FormEvent } from 'react';

const ComponentStudentCreate = () => {
	const { studentState, handleOnChange, resetForm } = useDtoStudentCreate();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (studentState.firstName === '')
			toast.error('Ingrese el nombre del estudiante');
		if (studentState.lastName === '')
			toast.error('Ingrese el apellido del estudiante');
		if (studentState.email === '')
			toast.error('Ingrese el email del estudiante');
		if (studentState.phone === '')
			toast.error('Ingrese el telefono del estudiante');
		if (studentState.birthDate === '')
			toast.error('Ingrese la fecha de nacimiento del estudiante');

		// if are all fields filled then create student
		if (
			studentState.email !== '' &&
			studentState.firstName !== '' &&
			studentState.lastName !== '' &&
			studentState.phone !== '' &&
			studentState.birthDate !== ''
		) {
			const messageToast = toast.loading('Creando estudiante...');
			dispatch(addStudent(studentState))
				.then(() => {
					toast.update(messageToast, {
						render: 'Estudiante creado',
						type: 'success',
						isLoading: false,
						autoClose: 1500,
					});
					navigate(URL.STUDENT);
				})
				.catch(error => {
					toast.update(messageToast, {
						render: 'No se pudo crear el estudiante',
						type: 'error',
						isLoading: false,
						autoClose: 1500,
					});
					console.error(error);
				})
				.finally(() => {
					resetForm();
				});
		}
	};
	return (
		<FormLayout>
			<StudentCreate onSubmit={handleSubmit} onChange={handleOnChange} />
		</FormLayout>
	);
};

export default ComponentStudentCreate;
