import React from 'react';
import { useAppSelector } from '@/store/hooks/hook';
import { selectTickets } from '@/store/slyces/ticket.slice';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import Table from '@components/Table';

export const Tickets: React.FunctionComponent = () => {
	const { tickets } = useAppSelector(selectTickets);

	return (
		<div>
			<h1>Tickets</h1>
			{tickets.length > 0 ? (
				<>
					<Table
						tickets={tickets}
						handlePaidTicket={(ticket: ITicketFirebaseEntity) =>
							console.log(ticket)
						}
					/>
				</>
			) : (
				<h1>no hay tickets</h1>
			)}
		</div>
	);
};
