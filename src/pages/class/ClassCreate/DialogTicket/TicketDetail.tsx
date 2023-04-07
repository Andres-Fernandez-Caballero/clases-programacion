import { ClassDetail } from '@pages/class/ClassCreate/DialogTicket/ClassDetail';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';

export interface TicketDetailProps {
	ticketItem: ITicketFirebaseEntity;
}

export const TicketDetail = ({ ticketItem }: TicketDetailProps) => (
	<>
		<ClassDetail classItem={ticketItem.class} />
		<h3>Total ${ticketItem.amount}</h3>
	</>
);
