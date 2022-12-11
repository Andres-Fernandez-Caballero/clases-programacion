import { firebaseApp } from '../../firebase/instance';
import {
	addDoc,
	collection,
	DocumentReference,
	Firestore,
	getFirestore,
} from 'firebase/firestore';
import { IFirebaseEntity } from '../../interfaces/FirebaseEntitys';

class FirebaseService<T extends IFirebaseEntity> {
	private readonly folder: string;
	private readonly db: Firestore;

	constructor(folder: string) {
		this.folder = folder;
		this.db = getFirestore(firebaseApp);
	}

	public async create(data: T): Promise<T> {
		const newData: T = { ...data };
		const docRef: DocumentReference = await addDoc(
			collection(this.db, this.folder),
			newData
		);

		return { ...newData, id: docRef.id };
	}
}

export default FirebaseService;
