import moment from 'moment/moment';
import { IClassFirebaseEntity } from '@interfaces/FirebaseEntitys';
export interface TicketDetailProps {
	classItem: IClassFirebaseEntity;
}
export const ClassDetail = ({ classItem }: TicketDetailProps) => (
	<main>
		<header>
			<h2>Clases de {classItem.programingLanguage.name}</h2>
		</header>
		<section>
			<h3 style={{ margin: '0' }}>Alumno</h3>
			<p style={{ margin: '0' }}>
				<strong>Nombre: </strong>
				{classItem.student.firstName} {classItem.student.lastName}
			</p>
			<p style={{ margin: '0' }}>
				<strong>Dni: </strong>
				{classItem.student.dni}
			</p>
		</section>
		<section>
			<h3 style={{ margin: '0', marginTop: '8px' }}>Detalle</h3>
			<div style={{ display: 'flex', gap: '8px' }}>
				<p style={{ margin: '0' }}>
					<strong>Tema: </strong>
					{classItem.programingLanguage.name}
				</p>
				<p style={{ margin: '0' }}>
					<strong>Duracion: </strong>
					{classItem.duration} horas
				</p>
			</div>
			<div style={{ display: 'flex', gap: '8px' }}>
				<p style={{ margin: '0' }}>
					<strong>Fecha: </strong>
					{moment(classItem.dateTime).format('yyyy-mm-DD')}
				</p>
				<p style={{ margin: '0' }}>
					<strong>Hora de inicio: </strong>
					{moment(classItem.dateTime).format('HH:mm')}
				</p>
			</div>
		</section>
		<hr />
	</main>
);
