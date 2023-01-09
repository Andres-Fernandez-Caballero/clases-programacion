import { IFirebaseEntity } from '@interfaces/FirebaseEntitys';
import FirebaseService from '@services/FirebaseServices/FirebaseService';

abstract class Service<E extends IFirebaseEntity> {
	private readonly entityService: FirebaseService<E>;

	constructor(folder: string) {
		this.entityService = new FirebaseService(folder);
	}

	protected getEntityService(): FirebaseService<E> {
		return this.entityService;
	}

	abstract create(entity: E): Promise<E>;

	abstract getAll(): Promise<E[]>;
}

export default Service;
