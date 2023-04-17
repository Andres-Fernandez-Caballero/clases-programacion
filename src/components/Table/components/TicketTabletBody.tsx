import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import moment from 'moment/moment';
import TableBody from '@mui/material/TableBody';
import { TicketsTableProps } from '@components/Table/interfaces';
import { handlePaidTicket } from '@slyces/ticket.slice';
import { useAppDispatch } from '@store/hooks/hook';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

export const TicketTabletBody = ({ tickets }: TicketsTableProps) => {
	const dispatch = useAppDispatch();
	return (
		<TableBody>
			{tickets.map(ticket => (
				<TableRow
					key={ticket.id}
					sx={{
						'& td, & th': {
							padding: '8px',
							border: 0,
							backgroundColor: ticket.isPaid ? 'white' : '#f6685e',
						},
					}}
				>
					<TableCell component='th' scope='row'>
						{ticket.class.student.firstName} {ticket.class.student.lastName}
					</TableCell>
					<TableCell align='right'>
						{moment(ticket.class.dateTime).format('yyyy-MM-DD')}
					</TableCell>

					<TableCell align='right'>{ticket.class.duration}</TableCell>
					<TableCell align='right'>${ticket.amount}</TableCell>
					<TableCell align='right'>
						<Button
							variant={ticket.isPaid ? 'outlined' : 'contained'}
							onClick={() => {
								dispatch(handlePaidTicket(ticket))
									.then(() => {
										toast.success('Pago confirmado');
									})
									.catch(() => {
										toast.error('Error al confirmar pago');
									});
							}}
						>
							{ticket.isPaid ? 'CANCELAR PAGO' : 'CONFIRMAR PAGO'}
						</Button>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};
