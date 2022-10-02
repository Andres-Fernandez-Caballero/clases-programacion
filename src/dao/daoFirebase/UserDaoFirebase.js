import ErrorDatabase from 'dao/ErrorDatabase';
import AbstractDaoFirebase from './AbstractDaoFirebase';
import { collection, addDoc } from 'firebase/firestore';

class UserDaoFirebase extends AbstractDaoFirebase {
	constructor() {
		super();
		this.firebaseFolder = 'Users';
	}

	async create(entity) {
		try {
			return await addDoc(
				collection(this.dbInstance, this.firebaseFolder),
				entity
			);
		} catch (error) {
			throw new ErrorDatabase('Error al crear el recurso');
		}
	}
}

export default UserDaoFirebase;
