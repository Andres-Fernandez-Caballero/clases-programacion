import { logout } from '@/store/slyces/auth.slyce';
import { useEffect, useState } from 'react';
import { ITicket } from '@/interfaces/Domain';
import styles from './Home.module.css';
import Table from '@components/Table';
import EstadisticaHome from '@components/EstadisticaHome';
import moment from 'moment';
import { useAppSelector } from '@store/hooks/hook';
import { selectTickets } from '@slyces/ticket.slice';
import { MONTHS } from '@constants/date';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';

export const Home: React.FunctionComponent = () => {
	const { tickets } = useAppSelector(selectTickets);
	const [ticketsFromCurrentMonth, setTicketsFromCurrentMonth] = useState(
		[] as ITicket[]
	);
	useEffect(() => {
		setTicketsFromCurrentMonth(
			tickets.filter(
				(ticket: ITicketFirebaseEntity) =>
					moment(ticket.class.dateTime).month() === moment().month()
			)
		);
	}, [tickets]);

	return (
		<main className={styles.container}>
			<h1>Panel de control</h1>

			<section>
				<h2>
					clases Facturadas en{' '}
					<span style={{ color: 'cadetblue' }}>{MONTHS[moment().month()]}</span>
				</h2>
				<Table tickets={ticketsFromCurrentMonth} />
			</section>
			<EstadisticaHome tikests={ticketsFromCurrentMonth} />
			<section>
				<button
					onClick={() => {
						// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
						// @ts-ignore
						dispatch(logout());
					}}
				>
					Logout
				</button>
			</section>
		</main>
	);
};
