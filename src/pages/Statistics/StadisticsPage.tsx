import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import EstadisticaHome from '@pages/Statistics/EstadisticaHome';
import { useAppSelector } from '@store/hooks/hook';
import React from 'react';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import moment from 'moment/moment';
import { selectTickets } from '@slyces/ticket.slice';

export const StatisticsPage = (): React.ReactElement => {
	const { tickets } = useAppSelector(selectTickets);

	const [ticketsFromCurrentMonth, setTiketsFromCurrentMonth] = React.useState<
		ITicketFirebaseEntity[]
	>([]);

	React.useEffect(() => {
		const currentTickests = () => {
			setTiketsFromCurrentMonth(
				tickets.filter(
					(ticket: ITicketFirebaseEntity) =>
						moment(ticket.class.dateTime).month() === moment().month()
				)
			);
		};
		currentTickests();
	}, [tickets]);

	return (
		<main>
			<h1>Estadisticas</h1>

			<Grid2>
				<EstadisticaHome tikests={ticketsFromCurrentMonth} />
			</Grid2>
		</main>
	);
};
