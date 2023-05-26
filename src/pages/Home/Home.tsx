import styles from './Home.module.css';
import Table from '@components/Table';

import moment from 'moment';
import { useAppSelector } from '@store/hooks/hook';
import { selectTickets } from '@slyces/ticket.slice';
import { MONTHS } from '@constants/date';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Card } from '@mui/material';
import EstadisticaHome from '@pages/Home/EstadisticaHome';

export const Home: React.FunctionComponent = () => {
	const { tickets } = useAppSelector(selectTickets);

	const [ticketsFromCurrentMonth, setTiketsFromCurrentMonth] = React.useState<
		ITicketFirebaseEntity[]
	>([]);

	React.useEffect(() => {
		const currentTikests = () => {
			setTiketsFromCurrentMonth(
				tickets.filter(
					(ticket: ITicketFirebaseEntity) =>
						moment(ticket.class.dateTime).month() === moment().month()
				)
			);
		};
		currentTikests();
	}, [tickets]);

	return (
		<main className={styles.container}>
			<h1 style={{ color: '#546556' }}> 🦖Dashboard </h1>
			<Grid2 container spacing={2}>
				<Grid2 xs={12} md={6}>
					<Card className={styles.card}>
						<h2>
							Periodo actual:&nbsp;
							<span style={{ color: 'cadetblue' }}>
								{MONTHS[moment().month()]}
							</span>
						</h2>
						<EstadisticaHome tikests={ticketsFromCurrentMonth} />
					</Card>
				</Grid2>

				<Grid2 xs={12} md={6}>
					<Table tickets={ticketsFromCurrentMonth} />
				</Grid2>
			</Grid2>
		</main>
	);
};
