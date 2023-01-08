import { useEffect } from 'react';
import StudentService from '@services/FirebaseServices/entityServices/StudentService';

export const Home: React.FunctionComponent = () => {
	useEffect(() => {
		const service = new StudentService();
		service
			.getAll()
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	return <>Home</>;
};
