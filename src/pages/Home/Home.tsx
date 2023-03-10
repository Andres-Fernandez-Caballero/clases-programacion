import { logout } from '@/store/slyces/auth.slyce';
import styles from './Home.module.css';
import Table from '@components/Table';
import EstadisticaHome from '@components/EstadisticaHome';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '@store/hooks/hook';
import { selectTickets } from '@slyces/ticket.slice';
import { MONTHS } from '@constants/date';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import React from 'react';

export const Home: React.FunctionComponent = () => {
	const dispatch = useAppDispatch();
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
	console.log('tickets', tickets);

	return (
		<main className={styles.container}>
			<h1>Panel de control</h1>

			<section>
				<h2>
					clases Facturadas en&nbsp;
					<span style={{ color: 'cadetblue' }}>{MONTHS[moment().month()]}</span>
				</h2>
				<EstadisticaHome tikests={ticketsFromCurrentMonth} />
				<Table tickets={ticketsFromCurrentMonth} />
			</section>
			<section>
				<button
					onClick={() => {
						dispatch(logout())
							.then(() => {
								console.log('logout');
							})
							.catch(error => {
								console.log(error);
							})
							.finally(() => {
								console.log('finally logout');
							});
					}}
				>
					Logout
				</button>
			</section>
		</main>
	);
};
