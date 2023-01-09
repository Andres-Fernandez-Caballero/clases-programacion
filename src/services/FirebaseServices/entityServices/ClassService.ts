import { firebaseFolders } from '@constants/firebaseFolders';
import { IClass } from '@interfaces/Domain';
import { IClassFirebaseEntity } from '@interfaces/FirebaseEntitys';
import Service from '@services/Service';

class ClassService extends Service<IClassFirebaseEntity> {
	constructor() {
		super(firebaseFolders.CLASSES);
	}

	async create(entity: IClass): Promise<IClassFirebaseEntity> {
		return await this.getEntityService().create(entity);
	}

	async getAll(): Promise<IClassFirebaseEntity[]> {
		return await this.getEntityService().getAll();
	}
}

export default ClassService;
