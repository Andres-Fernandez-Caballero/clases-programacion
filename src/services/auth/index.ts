import { firebaseApp } from '@/firebase/instance';
import { IUserCredential } from '@/interfaces/firebaseAuth';
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut as signOutGoogle,
} from 'firebase/auth';

const auth = getAuth(firebaseApp);

export const signIn = async (email: string, password: string) => {
	const userCredeentials = await signInWithEmailAndPassword(
		auth,
		email,
		password
	);
	console.log(userCredeentials.user);

	const user: IUserCredential = {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		accessToken: userCredeentials.user.accessToken,
		displayName: userCredeentials.user.displayName,
		email: userCredeentials.user.email,
		phoneNumber: userCredeentials.user.phoneNumber,
		photoURL: userCredeentials.user.photoURL,
		uid: userCredeentials.user.uid,
	};

	return user;
};

export const signOut = async () => {
	await signOutGoogle(auth);
};
