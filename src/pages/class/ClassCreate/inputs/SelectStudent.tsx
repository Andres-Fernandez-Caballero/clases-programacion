// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Autocomplete, Box, FormControl, TextField } from '@mui/material';

import { SelectStudentProps } from '@pages/class/ClassCreate/ClassCreate.interface';
import { ReactElement } from 'react';

export const SelectStudent = ({
	students,
	onChangeSelector,
}: SelectStudentProps): ReactElement => {
	return (
		<Box>
			<FormControl fullWidth>
				<Autocomplete
					disablePortal
					id='combo-box-demo'
					options={students.map(student => ({
						...student,
						id: student.id,
						label: student.firstName + ' ' + student.lastName,
					}))}
					onChange={onChangeSelector}
					renderInput={params => <TextField {...params} label='Alumno' />}
				></Autocomplete>
			</FormControl>
		</Box>
	);
};
