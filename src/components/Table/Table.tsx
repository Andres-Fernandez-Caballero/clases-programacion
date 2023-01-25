import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import moment from 'moment';

export interface ClassTableProps {
	tikests: ITicketFirebaseEntity[];
	handlePaidTicket: (ticket: ITicketFirebaseEntity) => void;
}
export const DenseTable = ({ tikests, handlePaidTicket }: ClassTableProps) => {
	tikests.sort(
		(a, b) => moment(b.class.dateTime).unix() - moment(a.class.dateTime).unix()
	);

	return (
		<>
			{tikests.length === 0 ? (
				<p>No hay clases facturadas</p>
			) : (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow>
								<TableCell>Alumno</TableCell>
								<TableCell align='right'>Fecha</TableCell>
								<TableCell align='right'>Lenguaje</TableCell>
								<TableCell align='right'>Cantidad&nbsp;(hs) </TableCell>
								<TableCell align='right'>Estado del Pago</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{tikests.map(ticket => (
								<TableRow
									key={ticket.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component='th' scope='row'>
										{ticket.class.student.firstName}{' '}
										{ticket.class.student.lastName}
									</TableCell>
									<TableCell align='right'>
										{moment(ticket.class.dateTime).format('yyyy-MM-DD')}
									</TableCell>
									<TableCell align='right'>
										{ticket.class.programingLeanguage.name}
									</TableCell>
									<TableCell align='right'>{ticket.class.duration}</TableCell>
									<TableCell
										sx={{ color: ticket.isPaid ? 'green' : 'red' }}
										onClick={() => {
											handlePaidTicket(ticket);
										}}
										align='right'
									>
										{ticket.isPaid ? 'PAGO' : 'PENDIENTE'}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</>
	);
};
