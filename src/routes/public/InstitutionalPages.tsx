import { PATH_NAME } from '@constants/routes';
import { Route, Routes } from 'react-router-dom';

export const InstitutionalPages = () => (
	<Routes>
		<Route path={PATH_NAME.ABOUT} element={<h1>About</h1>} />
	</Routes>
);
