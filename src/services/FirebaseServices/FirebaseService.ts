import { IFirebaseEntity } from '../../interfaces/FirebaseEntitys';

class FirebaseService<T extends IFirebaseEntity> {
	private readonly folder: string;

	constructor(folder: string) {
		this.folder = folder;
	}

	public async create(data: T): Promise<T> {
		return data;
	}
}

export default FirebaseService;
