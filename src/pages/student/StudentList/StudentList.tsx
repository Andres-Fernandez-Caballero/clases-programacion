import GenericTable from '@components/tables/StudentTable';
import { useAppSelector } from '@store/hooks/hook';
import { selectStudents } from '@slyces/students.slice';
import { FC, ReactElement } from 'react';

export const StudentList: FC = (): ReactElement => {
	const { students } = useAppSelector(selectStudents);
	return (
		<>
			<GenericTable items={students} />
		</>
	);
};
