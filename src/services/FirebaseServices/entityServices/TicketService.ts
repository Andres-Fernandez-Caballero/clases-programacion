import moment from 'moment';
import { firebaseFolders } from '@constants/firebaseFolders';
import { ITicket } from '@interfaces/Domain';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import Service from '@services/Service';

class TicketService extends Service<ITicketFirebaseEntity> {
	constructor() {
		super(firebaseFolders.TICKETS);
	}

	async create(entity: ITicket): Promise<ITicketFirebaseEntity> {
		return await this.getEntityService().create({
			...entity,
			isPaid: false,
			paymentDate: '',
			date: moment().format('DD/MM/YYYY'),
		});
	}

	async getAll(): Promise<ITicketFirebaseEntity[]> {
		return await this.getEntityService().getAll();
	}
}

export default TicketService;
