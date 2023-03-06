/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { FormControl, styled, TextField } from '@mui/material';
import FabSubmit from '@components/FabSubmit';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { StudentCreateProps } from '@pages/student/StudentCreate/StudentCreate.interfaces';
import React from 'react';

const FormControlCustom = styled(FormControl)(({ theme }) => ({
	margin: theme.spacing(1),
	minWidth: 120,
}));

export const StudentCreate: React.FC<StudentCreateProps> = ({
	onChange,
	onSubmit,
}: StudentCreateProps): React.ReactElement => {
	return (
		<form onSubmit={onSubmit}>
			<Grid2 container spacing={{ md: 10 }}>
				<Grid2 xs={12} sm={6}>
					<FormControlCustom fullWidth>
						<TextField
							id='firstName'
							label='Nombre'
							variant='standard'
							name='firstName'
							onChange={onChange}
						/>
					</FormControlCustom>
				</Grid2>
				<Grid2 xs={12} sm={6}>
					<FormControlCustom fullWidth>
						<TextField
							id='lastName'
							label='Apellido'
							variant='standard'
							name='lastName'
							onChange={onChange}
						/>
					</FormControlCustom>
				</Grid2>
				<Grid2 xs={12} sm={6}>
					<FormControlCustom fullWidth>
						<TextField
							id='email'
							label='Email'
							variant='standard'
							name='email'
							type='email'
							onChange={onChange}
						/>
					</FormControlCustom>
				</Grid2>
				<Grid2 xs={12} sm={6}>
					<FormControlCustom fullWidth>
						<TextField
							id='phone'
							label='Telefono'
							variant='standard'
							name='phone'
							type='number'
							onChange={onChange}
						/>
					</FormControlCustom>
				</Grid2>
				<Grid2 xs={12} sm={6}>
					<FormControlCustom fullWidth>
						<TextField
							id='dni'
							label='Dni'
							variant='standard'
							name='dni'
							type='number'
							onChange={onChange}
						/>
					</FormControlCustom>
				</Grid2>
				<Grid2 xs={12} sm={6}>
					<FormControlCustom fullWidth>
						<TextField
							id='birthDate'
							label='Fecha Nacimiento'
							name='birthDate'
							type='date'
							onChange={onChange}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</FormControlCustom>
				</Grid2>
				<FabSubmit text='guardar' />
			</Grid2>
		</form>
	);
};
