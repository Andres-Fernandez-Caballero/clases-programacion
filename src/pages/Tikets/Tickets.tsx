import React from 'react';
import { useAppSelector } from '@/store/hooks/hook';
import { selectTickets } from '@/store/slyces/ticket.slice';
import Table from '@components/Table';

export const Tickets: React.FunctionComponent = () => {
	const { tickets } = useAppSelector(selectTickets);

	return (
		<div>
			<h1>Tickets</h1>
			{tickets.length > 0 ? (
				<>
					<Table tickets={tickets} />
				</>
			) : (
				<h1>no hay tickets</h1>
			)}
		</div>
	);
};
