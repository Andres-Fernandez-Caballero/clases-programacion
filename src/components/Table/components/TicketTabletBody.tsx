import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import moment from 'moment/moment';
import TableBody from '@mui/material/TableBody';
import { TicketsTableProps } from '@components/Table/interfaces';
import { handlePaidTicket } from '@slyces/ticket.slice';
import { useAppDispatch } from '@store/hooks/hook';

export const TicketTabletBody = ({ tickets }: TicketsTableProps) => {
	const dispatch = useAppDispatch();
	return (
		<TableBody>
			{tickets.map(ticket => (
				<TableRow key={ticket.id} sx={{ '& td, & th': { border: 0 } }}>
					<TableCell component='th' scope='row'>
						{ticket.class.student.firstName} {ticket.class.student.lastName}
					</TableCell>
					<TableCell align='right'>
						{moment(ticket.class.dateTime).format('yyyy-MM-DD')}
					</TableCell>
					<TableCell align='right'>
						{ticket.class.programingLeanguage.name}
					</TableCell>
					<TableCell align='right'>{ticket.class.duration}</TableCell>
					<TableCell
						sx={{ color: ticket.isPaid ? 'green' : 'red', cursor: 'pointer' }}
						onClick={() => {
							dispatch(handlePaidTicket(ticket))
								.then(() => {
									console.log('Ticket actualizado');
								})
								.catch(error => {
									console.error(error);
								});
						}}
						align='right'
					>
						{ticket.isPaid ? 'PAGO' : 'PENDIENTE'}
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};
