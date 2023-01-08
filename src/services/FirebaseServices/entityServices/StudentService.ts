import { IStudent } from '@interfaces/Domain';
import { firebaseFolders } from '@constants/firebaseFolders';
import { IStudentFirebaseEntity } from '@interfaces/FirebaseEntitys';
import Service from '@services/Service';

class StudentService extends Service<IStudentFirebaseEntity> {
	constructor() {
		super(firebaseFolders.STUDENTS);
	}

	async create(entity: IStudent): Promise<IStudentFirebaseEntity> {
		return await this.getEntityService().create(entity);
	}

	async getAll(): Promise<IStudentFirebaseEntity[]> {
		return await this.getEntityService().getAll();
	}
}

export default StudentService;
