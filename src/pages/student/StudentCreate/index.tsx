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
	};
	return (
		<FormLayout>
			<StudentCreate onSubmit={handleSubmit} onChange={handleOnChange} />
		</FormLayout>
	);
};

export default ComponentStudentCreate;
