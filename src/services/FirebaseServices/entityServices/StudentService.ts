import { IStudent } from '../../../interfaces/Domain';
import { firebaseFolders } from '../../../constants/firebaseFolders';
import { IStudentFirebaseEntity } from '../../../interfaces/FirebaseEntitys';
import Service from '../../Service';
import moment from 'moment';

class StudentService extends Service<IStudent, IStudentFirebaseEntity> {
	constructor() {
		super(firebaseFolders.STUDENTS);
	}

	async create(model: IStudent): Promise<IStudentFirebaseEntity> {
		const entity: IStudentFirebaseEntity = this.transformModelToEntity(model);
		entity.created = moment().format('YYYY-MM-DD');

		return await this.getEntityService().create(entity);
	}

	async getAll(): Promise<IStudent[]> {
		const entities: IStudentFirebaseEntity[] =
			await this.getEntityService().getAll();
		return entities.map(entity => this.transformEntityToModel(entity));
	}

	transformModelToEntity(model: IStudent): IStudentFirebaseEntity {
		return {
			...model,
			birthday: moment(model.birthday).format('YYYY-MM-DD'),
		};
	}

	transformEntityToModel(entity: IStudentFirebaseEntity): IStudent {
		return {
			...entity,
			birthday: moment(entity.birthday),
		};
	}
}

export default StudentService;
