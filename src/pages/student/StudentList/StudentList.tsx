import React, { useEffect, useState } from 'react';
import { IStudentFirebaseEntity } from '@interfaces/FirebaseEntitys';
import StudentService from '@services/FirebaseServices/entityServices/StudentService';
import GenericTable from '@components/tables/StudentTable';

export const StudentList: React.FC = (): React.ReactElement => {
	const [students, setStudents] = useState([] as IStudentFirebaseEntity[]);
	useEffect(() => {
		console.log('StudentList');

		const service = new StudentService();
		service
			.getAll()
			.then((s: IStudentFirebaseEntity[]) => {
				console.log('students', s);
				setStudents(s);
			})
			.catch(() => {
				console.log('error');
			});
	}, []);

	return (
		<>
			<GenericTable items={students} />
		</>
	);
};
