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
		<section>
			<h3>Estadisticas mensuales</h3>
			<p>
				Ganancia mensual{' '}
				<span style={{ color: 'darkcyan' }}>${getGananciaMensual()}</span>
			</p>
		</section>
	);
};
