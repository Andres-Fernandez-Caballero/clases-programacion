import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import React from 'react';

export interface EstadisticaHomeProps {
	tikests: ITicketFirebaseEntity[];
}

export const EstadisticaHome: React.FunctionComponent<EstadisticaHomeProps> = ({
	tikests,
}: EstadisticaHomeProps) => {
	const getGananciaMensual = () => {
		return tikests.reduce((acc, ticket) => {
			if (ticket.isPaid) {
				return acc + ticket.amount;
			}
			return acc;
		}, 0);
	};

	return (
		<section
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<article>
				<h3>Ganancia mensual</h3>
				<p style={{ fontSize: '2rem', color: 'darkcyan' }}>
					${getGananciaMensual()}
				</p>
			</article>
			<article>
				<h3>Clases Realizadas</h3>
				<p style={{ fontSize: '2rem', color: 'darkcyan' }}>{tikests.length}</p>
			</article>
		</section>
	);
};
