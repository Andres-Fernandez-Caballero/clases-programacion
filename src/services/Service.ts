import { IFirebaseEntity } from '../interfaces/FirebaseEntitys';
import FirebaseService from './FirebaseServices/FirebaseService';

abstract class Service<T, E extends IFirebaseEntity> {
	private readonly entityService: FirebaseService<E>;

	constructor(folder: string) {
		this.entityService = new FirebaseService(folder);
	}

	protected getEntityService(): FirebaseService<E> {
		return this.entityService;
	}

	abstract create(model: T): Promise<E>;

	abstract getAll(): Promise<T[]>;

	protected abstract transformModelToEntity(model: T): E;

	protected abstract transformEntityToModel(entity: E): T;
}

export default Service;
