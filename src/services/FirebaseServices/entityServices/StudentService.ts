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

	transformModelToEntity(model: IStudent): IStudentFirebaseEntity {
		return {
			...model,
			birthday: moment(model.birthday).format('YYYY-MM-DD'),
			firstClass: moment().format('YYYY-MM-DD'),
			lastClass: moment().format('YYYY-MM-DD'),
		};
	}
}

export default StudentService;
