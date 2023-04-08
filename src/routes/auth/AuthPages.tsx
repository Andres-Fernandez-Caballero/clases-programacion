import { Route, Routes } from 'react-router-dom';
import { PATH_NAME } from '@constants/routes';
import Login from '@/pages/Login';

export const AuthPages = () => (
	<Routes>
		<Route path={PATH_NAME.LOGIN} index element={<Login />} />
	</Routes>
);
