import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import { navBarLinks, PATH_NAME } from '@constants/routes';
import ClassCreate from '@pages/class/ClassCreate';
import StudentList from '@pages/student/StudentList';
import Tickets from '@pages/Tikets';
import StudentCreate from '@pages/student/StudentCreate';
import NavigableLayour from '@components/layers/NavigableLayout';

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route
				path={PATH_NAME.ROOT}
				element={<NavigableLayour navBarLinks={navBarLinks} />}
			>
				<Route index element={<Home />} />
				<Route path={PATH_NAME.CLASS} element={<ClassCreate />}>
					<Route path={PATH_NAME.CREATE} element={<ClassCreate />} />
				</Route>
				<Route path={PATH_NAME.STUDENT}>
					<Route path={PATH_NAME.CREATE} element={<StudentCreate />} />
					<Route index element={<StudentList />} />
				</Route>
				<Route path={PATH_NAME.TICKET} element={<Tickets />} />
				<Route path='*' element={<div>404 NOT FOUND</div>} />
			</Route>
		</Routes>
	);
};

export default PrivateRoutes;