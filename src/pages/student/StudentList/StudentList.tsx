import GenericTable from '@components/tables/StudentTable';
import { useAppSelector } from '@store/hooks/hook';
import { selectStudents } from '@slyces/students.slice';
import { FC, ReactElement } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { URL } from '@constants/routes';
import FabButton from '@components/layouts/FabButton';

export const StudentList: FC = (): ReactElement => {
	const { students } = useAppSelector(selectStudents);
	return (
		<main>
			<GenericTable items={students} />
			<FabButton to={URL.STUDENT_CREATE}>
				<AddIcon />
			</FabButton>
		</main>
	);
};
