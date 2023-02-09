import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import NavigableLayour from '@components/layers/NavigableLayout';
import { navBarLinks, PATH_NAME, URL } from '@constants/routes';

import ClassCreate from '@pages/class/ClassCreate';
import Home from '@pages/Home';
import StudentCreate from '@pages/student/StudentCreate';
import { useSelector } from 'react-redux';
import { selectAuth } from '@/store/slyces/auth.slyce';
import Login from '@/pages/Login';
import Tikets from '@/pages/Tikets';

const MainRouter = () => {
	const auth = useSelector(selectAuth);
	console.log(auth);

	return (
		<Routes>
			<Route
				path={PATH_NAME.ROOT}
				element={
					auth.isAuthenticate ? (
						<NavigableLayour navBarLinks={navBarLinks} />
					) : (
						<Navigate to={URL.LOGIN} />
					)
				}
			>
				<Route index element={<Home />} />
				<Route path={PATH_NAME.ABOUT} element={<h1>About</h1>} />
				<Route path={PATH_NAME.CLASS} element={<ClassCreate />}>
					<Route path={PATH_NAME.CREATE} element={<ClassCreate />} />
				</Route>

				<Route path={PATH_NAME.TICKET} element={<Tikets />} />
				<Route path={PATH_NAME.STUDENT}>
					<Route path={PATH_NAME.CREATE} element={<StudentCreate />} />
					<Route index element={<h1>Todos los estudiantes</h1>} />
				</Route>
			</Route>

			<Route
				path={PATH_NAME.AUTH}
				element={
					!auth.isAuthenticate ? (
						<div>
							<Outlet />{' '}
						</div>
					) : (
						<Navigate to={URL.ROOT} />
					)
				}
			>
				<Route path={PATH_NAME.LOGIN} element={<Login />} />
			</Route>

			<Route path='*' element={<div>404 NOT FOUND</div>} />
		</Routes>
	);
};

export default MainRouter;
