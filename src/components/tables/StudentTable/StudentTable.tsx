import React from 'react';
import { IStudentTableProps } from './GenericTable.interfaces';
import { EmptyData } from '@components/Table/components/EmptyData';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';

export const StudentTable: React.FC<IStudentTableProps> = ({
	items,
}: IStudentTableProps): React.ReactElement => {
	return (
		<>
			{items.length === 0 ? (
				<EmptyData />
			) : (
				<main>
					<p>Cantidad de alumnos: {items.length} </p>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Nombre</TableCell>
									<TableCell align='right'>Apellido</TableCell>
									<TableCell align='right'>DNI</TableCell>
									<TableCell align='right'>Email</TableCell>
									<TableCell align='right'>Fecha De Nacimiento</TableCell>
									<TableCell align='right'>Telefono</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{items.map(item => (
									<TableRow key={item.id}>
										<TableCell component='th' scope='row'>
											{item.firstName}
										</TableCell>
										<TableCell align='right'>{item.lastName}</TableCell>
										<TableCell align='right'>{item.dni}</TableCell>
										<TableCell align='right'>
											<a href={`mailto: ${item.email}`}>{item.email}</a>
										</TableCell>
										<TableCell align='right'>{item.birthDate}</TableCell>
										<TableCell align='right'>
											<a
												rel='noopener noreferrer'
												href={`https://wa.me/${item.phone}`}
												target='_blank'
											>
												{item.phone}
											</a>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</main>
			)}
		</>
	);
};
