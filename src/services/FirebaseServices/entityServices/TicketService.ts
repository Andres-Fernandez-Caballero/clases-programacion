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

	async paidTicket(id: string): Promise<void> {
		const regist = await this.getEntityService().getById(id);
		await this.getEntityService().update(id, {
			...regist,
			isPaid: true,
			paymentDate: moment().format('DD/MM/YYYY'),
		});
		console.warn('regist exito');
	}

	async cancelPaidTicket(id: string): Promise<void> {
		const regist = await this.getEntityService().getById(id);
		await this.getEntityService().update(id, {
			...regist,
			isPaid: false,
			paymentDate: '',
		});
		console.warn('regist exito cancelado');
	}
}

export default TicketService;
