import { useDispatch } from 'react-redux';
import { logout } from '@/store/slyces/auth.slyce';
import { useEffect, useState } from 'react';
import { ITicket } from '@/interfaces/Domain';
import TicketService from '@/services/FirebaseServices/entityServices/TicketService';
import styles from './Home.module.css';
import Table from '@components/Table';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';

export const Home: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const ticketService = new TicketService();
	function handlePaidTicket(ticket: ITicketFirebaseEntity): void {
		if (ticket.id === undefined) return;
		if (ticket.isPaid) {
			ticketService
				.cancelPaidTicket(ticket.id)
				.then(() => {
					console.log('Pago cancelado');
				})
				.catch(err => {
					console.log(err);
				});
		} else {
			ticketService
				.paidTicket(ticket.id)
				.then(() => {
					console.log('Pago realizado');
				})
				.catch(err => {
					console.log(err);
				});
		}
	}

	const [tickets, setTickets] = useState([] as ITicket[]);
	useEffect(() => {
		ticketService
			.getAll()
			.then(ticketsDb => {
				setTickets(ticketsDb);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	return (
		<main className={styles.container}>
			<h1>Panel de control</h1>

			<section>
				<h2>clases Facturadas</h2>
				<Table tikests={tickets} handlePaidTicket={handlePaidTicket} />
			</section>
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
