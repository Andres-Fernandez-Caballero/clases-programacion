import { useAppSelector } from '@/store/hooks/hook';
import { selectTickets } from '@/store/slyces/ticket.slice';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import Table from '@components/Table';

export const Tikets: React.FunctionComponent = () => {
	const tikets = useAppSelector(selectTickets);

	return (
		<div>
			<h1>Tikets</h1>
			<Table
				tikests={tikets.tickets}
				handlePaidTicket={function (ticket: ITicketFirebaseEntity): void {
					throw new Error('Function not implemented.');
				}}
			/>
		</div>
	);
};
