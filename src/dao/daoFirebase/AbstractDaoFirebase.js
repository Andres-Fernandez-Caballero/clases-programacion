import IDao from 'dao/IDao';
import { app } from 'firebase/instance';
import { getFirestore } from 'firebase/firestore';

class AbstractDaoFirebase extends IDao {
	constructor() {
		super();
		this.dbInstance = getFirestore(app);
	}
}

export default AbstractDaoFirebase;
