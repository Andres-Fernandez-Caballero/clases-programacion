import { initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { config } from 'configs/config';
import DaoProgramingLeanguage from 'dao/daoFirebase/DaoProgramingLeanguage';
import ProgramingLeanguage from 'models/programingLeanguage/ProgramingLeanguage';

describe('programing leanguage dao unit test', () => {
	test.skip('should store a programing leanguage object', async () => {
		const dao = new DaoProgramingLeanguage();
		const javascriptLeanguage = new ProgramingLeanguage('c#', 'imagen.jpg');
		try {
			const firebaseTestEnviroment = await initializeTestEnvironment({
				projectId: config.firebase.projectId,
				firestore: {
					host: 'localhost',
					port: 8080,
				},
			});
			await firebaseTestEnviroment.clearFirestore();
			await dao.create(javascriptLeanguage);
		} catch (error) {
			throw error;
		}
		// .then(data => console.log('almacenado'))
		// .catch(error => console.error(error));
	});
});
