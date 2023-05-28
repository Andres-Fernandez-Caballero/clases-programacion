import { useParams } from 'react-router-dom';
import FormLayout from '@components/layers/FormLayout';
import { useEffect, useState } from 'react';
import StudentService from '@services/FirebaseServices/entityServices/StudentService';
import Student from '@/models/Student';
import { ZodiacSign } from '@interfaces/Domain';
import { toast } from 'react-toastify';
import { Skeleton } from '@mui/material';

export const StudentDetail = () => {
	const params = useParams();
	const id = params.id;
	const [student, setStudent] = useState<Student>();
	const studentService = new StudentService();
	const [zodiacSign, setZodiacSign] = useState<ZodiacSign>();

	const loadStudent = async () => {
		if (id !== undefined) {
			const dataStudent = new Student(await studentService.getById(id));
			setStudent(dataStudent);
			setZodiacSign(await dataStudent.getZodiacSign());
		}
	};

	useEffect(() => {
		loadStudent().catch(error => {
			toast.error(error.message);
		});
	}, []);

	console.table(zodiacSign);
	console.table(student);
	return (
		<FormLayout>
			{student !== undefined && zodiacSign !== undefined ? (
				<main>
					<h1>{student.FullName}</h1>
					<p>EMAIL: {student.Email}</p>
					<p>TELEFONO: {student.Phone}</p>
					<p>FECHA DE NACIMIENTO: {student.BirthDate}</p>
					<p>EDAD: {student.Age} años</p>
					<p>
						Signo: {zodiacSign.name} {zodiacSign.sign}
					</p>
				</main>
			) : (
				<div>
					<Skeleton
						animation={'wave'}
						variant={'rectangular'}
						width={'50%'}
						height={50}
					/>
					<Skeleton
						animation={'wave'}
						variant={'text'}
						width={'50%'}
						height={50}
					/>
					<Skeleton
						animation={'wave'}
						variant={'text'}
						width={'50%'}
						height={50}
					/>
					<Skeleton
						animation={'wave'}
						variant={'text'}
						width={'50%'}
						height={50}
					/>
					<Skeleton
						animation={'wave'}
						variant={'text'}
						width={'50%'}
						height={50}
					/>
					<Skeleton
						animation={'wave'}
						variant={'text'}
						width={'50%'}
						height={50}
					/>
				</div>
			)}
		</FormLayout>
	);
};
