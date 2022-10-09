// eslint-disable-next-line no-unused-vars
import Entity from 'models/Entity';
import db from './firebaseDbInstance';
import { collection, addDoc } from 'firebase/firestore';
import IDao from 'dao/IDao';

class DaoFirebase extends IDao {
	constructor(className = 'Entity') {
		super();
		this._className = className;
	}

	/**
	 * @param {Entity} entity
	 */
	async create(entity) {
		const folder = entity.className(); // get class name of entity
		console.log('folder', entity.className());
		const jsonEntity = entity.toJson();
		try {
			console.log('entre en el try O_x');
			const docRef = await addDoc(collection(db, folder), jsonEntity);
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			throw new Error('Error adding document: ' + e);
		}
	}
}

export default DaoFirebase;
