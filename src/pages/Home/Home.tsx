import styles from './Home.module.css';
import Table from '@components/Table';

import moment from 'moment';
import { useAppSelector } from '@store/hooks/hook';
import { selectTickets } from '@slyces/ticket.slice';
import { MONTHS } from '@constants/date';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import FabButton from '@components/layouts/FabButton';
import { URL } from '@constants/routes';
import AddIcon from '@mui/icons-material/Add';

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
			<h1 style={{ color: '#546556' }}>
				{' '}
				🦖Dashboard{' '}
				<span style={{ color: 'cadetblue' }}>{MONTHS[moment().month()]}</span>
			</h1>
			<p>Resumen</p>
			<Grid2 container>
				<Grid2 xs={12} md={12}>
					<Table tickets={ticketsFromCurrentMonth} />
				</Grid2>
			</Grid2>
			<FabButton to={URL.CLASS_CREATE}>
				<AddIcon />
			</FabButton>
		</main>
	);
};
