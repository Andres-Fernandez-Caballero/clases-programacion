import { firebaseApp } from '@firebaseInstance/instance';
import { IFirebaseEntity } from '@interfaces/FirebaseEntitys';
import {
	addDoc,
	collection,
	DocumentReference,
	Firestore,
	getFirestore,
	getDocs,
	updateDoc,
	doc,
} from 'firebase/firestore';

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
		console.log('Document written with ID: ', docRef.id);
		return { ...newData, id: docRef.id };
	}

	public async update(id: string, newData: T): Promise<void> {
		const regist = doc(this.db, this.folder, id);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		await updateDoc(regist, {
			...newData,
		});
	}

	public async getById(id: string): Promise<T> {
		const allDocks = await this.getAll();
		return allDocks.find(dock => dock.id === id) as T;
	}

	public async getAll(): Promise<T[]> {
		const querySnapshot = await getDocs(collection(this.db, this.folder));
		return querySnapshot.docs.map(doc => {
			const data = doc.data() as T;
			return { ...data, id: doc.id };
		});
	}
}

export default FirebaseService;
