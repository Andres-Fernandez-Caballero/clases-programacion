import { IStudent } from '../../../interfaces/Domain';
import FirebaseService from '../FirebaseService';

class StudentService extends FirebaseService<IStudent> {
	constructor() {
		super('students');
	}
}

export default StudentService;
