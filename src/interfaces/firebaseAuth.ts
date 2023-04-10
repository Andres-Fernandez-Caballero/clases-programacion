import { IUserDataFirebaseEntity } from '@interfaces/FirebaseEntitys';

export interface IUserCredential {
	accessToken: string | null;
	displayName: string | null;
	email: string | null;
	phoneNumber: string | null;
	photoURL: string | null;
	uid: string;
	userData: IUserDataFirebaseEntity | null;
}
