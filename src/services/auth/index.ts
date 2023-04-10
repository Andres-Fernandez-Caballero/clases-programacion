import { firebaseApp } from '@/firebase/instance';
import { IloginDto } from '@interfaces/auth';
import { IUserCredential } from '@/interfaces/firebaseAuth';
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut as signOutGoogle,
} from 'firebase/auth';
import UserService from '@services/FirebaseServices/entityServices/UserService';

const auth = getAuth(firebaseApp);

export const signIn = async (dtoLogin: IloginDto) => {
	const { email, password } = dtoLogin;
	const userCredential = await signInWithEmailAndPassword(
		auth,
		email,
		password
	);

	const userService = new UserService();
	const userData = await userService.getByUid(userCredential.user.uid);
	if ((await userData) === null) {
		await userService.createById(userCredential.user.uid);
	}

	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		accessToken: userCredential.user.accessToken,
		displayName: userCredential.user.displayName,
		email: userCredential.user.email,
		phoneNumber: userCredential.user.phoneNumber,
		photoURL: userCredential.user.photoURL,
		uid: userCredential.user.uid,
		userData,
	} as IUserCredential;
};

export const signOut = async () => {
	await signOutGoogle(auth);
};
