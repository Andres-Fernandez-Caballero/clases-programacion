import { IUserDataFirebaseEntity } from '@interfaces/FirebaseEntitys';
import { firebaseFolders } from '@constants/firebaseFolders';
import {
	doc,
	Firestore,
	getDoc,
	getFirestore,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import { firebaseApp } from '@/firebase/instance';
import { CLASS_PRICE } from '@constants/price';

class UserService {
	private readonly folder: string;
	private readonly db: Firestore;
	constructor() {
		this.folder = firebaseFolders.USERS_DATA;
		this.db = getFirestore(firebaseApp);
	}

	async createById(uid: string) {
		const defaultUserData: IUserDataFirebaseEntity = {
			CBU: '',
			MpAlias: '',
			pricePerHour: CLASS_PRICE,
		};

		await setDoc(doc(this.db, this.folder, uid), defaultUserData);
	}

	async getByUid(uid: string) {
		const docRef = doc(this.db, this.folder, uid);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data() as IUserDataFirebaseEntity;
		} else {
			return null;
		}
	}

	async updateByUid(uid: string, data: IUserDataFirebaseEntity) {
		const docRef = doc(this.db, this.folder, uid);
		await setDoc(docRef, data);
	}

	async updateByUidOneField(uid: string, field: string, data: string | number) {
		const docRef = doc(this.db, this.folder, uid);
		await updateDoc(docRef, {
			[field]: data,
		});
		console.log('updateByUidOneField', field, data);
	}
}

export default UserService;
