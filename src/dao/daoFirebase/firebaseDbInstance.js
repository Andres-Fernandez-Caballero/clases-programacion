import { app } from 'firebase/instance';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

const db = getFirestore(app);

if (location.hostname === 'localhost') {
	console.log('localhost detected!');
	connectFirestoreEmulator(db, 'localhost', 8080);
}

export default db;
