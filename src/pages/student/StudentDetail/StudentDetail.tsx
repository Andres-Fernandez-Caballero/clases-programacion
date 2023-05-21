import { useParams } from 'react-router-dom';
import FormLayout from '@components/layers/FormLayout';
import { useEffect, useState } from 'react';
import StudentService from '@services/FirebaseServices/entityServices/StudentService';
import Student from '@/models/Student';
import { ZodiacSign } from '@interfaces/Domain';

export const StudentDetail = () => {
	const params = useParams();
	const id = params.id;
	const [student, setStudent] = useState<Student>();
	const studentService = new StudentService();
	const [zodiacSign, setZodiacSign] = useState<ZodiacSign>();
	const loadStudent = () => {
		if (id !== undefined) {
			studentService
				.getById(id)
				.then(student => {
					setStudent(new Student(student));
				})
				.catch(error => {
					console.log(error);
				});
		}
	};

	const loadZodiacSign = () => {
		if (student !== undefined) {
			student
				.getZodiacSign()
				.then(zodiacSign => {
					setZodiacSign(zodiacSign);
				})
				.catch(error => {
					console.log(error);
				});
		}
	};

	useEffect(() => {
		loadStudent();
	}, []);

	useEffect(() => {
		loadZodiacSign();
	}, [zodiacSign]);

	return (
		<FormLayout>
			{student !== undefined && zodiacSign !== undefined && (
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
			)}
		</FormLayout>
	);
};
