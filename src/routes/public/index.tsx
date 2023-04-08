import { Navigate, Route, Routes } from 'react-router-dom';
import { PATH_NAME } from '@constants/routes';
import Login from '@/pages/Login';

const PublicRoutes = () => (
	<Routes>
		<Route path={PATH_NAME.LOGIN} index element={<Login />} />
		<Route path={'/*'} element={<Navigate to={PATH_NAME.LOGIN} />} />
	</Routes>
);

export default PublicRoutes;
