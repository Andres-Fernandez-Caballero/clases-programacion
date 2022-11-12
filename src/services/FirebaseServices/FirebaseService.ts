import moment from 'moment';
import { IFirebaseEntity } from '../../interfaces/FirebaseEntitys';

class FirebaseService<T extends IFirebaseEntity> {
	private readonly folder: string;

	constructor(folder: string) {
		this.folder = folder;
	}

	public async create(data: T): Promise<T> {
		// simula la creación de un registro en la base de datos
		const id = Math.random().toString(36).substring(2);
		const created = moment();

		const result: T = {
			...data,
			id,
			created,
		};
		return result;
	}
}

export default FirebaseService;
