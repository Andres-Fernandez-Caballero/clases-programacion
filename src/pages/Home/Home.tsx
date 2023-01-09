import { useDispatch } from 'react-redux';
import { logout } from '@/store/slyces/auth.slyce';
import { useEffect, useState } from 'react';
import { ITicket } from '@/interfaces/Domain';
import TicketService from '@/services/FirebaseServices/entityServices/TicketService';
import { ITicketFirebaseEntity } from '@/interfaces/FirebaseEntitys';
import styles from './Home.module.css';
import moment from 'moment';

export const Home: React.FunctionComponent = () => {
	const dispatch = useDispatch();

	const [tikets, setTikets] = useState([] as ITicket[]);
	useEffect(() => {
		const ticketService = new TicketService();
		ticketService
			.getAll()
			.then(ticketsDb => {
				setTikets(ticketsDb);
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
				<table>
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Alumno</th>
							<th>DNI</th>
							<th>C/horas</th>
							<th>Lenguaje</th>
							<th>Monto total</th>
							<th>Estado del pago</th>
						</tr>
					</thead>
					<tbody>
						{tikets.map((ticket: ITicketFirebaseEntity) => (
							<tr key={ticket.id}>
								<td>{moment(ticket.class.dateTime).format('YYYY-MM-d')}</td>
								<td>
									{ticket.class.student.firstName}{' '}
									{ticket.class.student.lastName}
								</td>
								<td>{ticket.class.student.dni}</td>
								<td>{ticket.class.duration}</td>
								<td>{ticket.class.programingLeanguage.name}</td>
								<td>{ticket.amount}</td>
								<td>
									<span
										style={{
											color: ticket.isPaid ? 'green' : 'crimson',
											fontWeight: 'bolder',
										}}
									>
										{ticket.isPaid ? 'PAGO' : 'PENDIENTE'}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
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
