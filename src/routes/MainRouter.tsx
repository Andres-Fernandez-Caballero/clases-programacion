import { Route, Routes } from 'react-router-dom';
import NavigableLayour from '@components/layers/NavigableLayout';
import { navBarLinks, PATH_NAME } from '@constants/routes';

import ClassCreate from '@pages/class/ClassCreate';
import Home from '@pages/Home';
import StudentCreate from '@pages/student/StudentCreate';

const MainRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigableLayour navBarLinks={navBarLinks} />}>
				<Route index element={<Home />} />
				<Route path={PATH_NAME.ABOUT} element={<h1>About</h1>} />
				<Route path={PATH_NAME.CLASS} element={<ClassCreate />}>
					<Route path={PATH_NAME.CREATE} element={<ClassCreate />} />
				</Route>
				<Route path={PATH_NAME.STUDENT}>
					<Route path={PATH_NAME.CREATE} element={<StudentCreate />} />
					<Route index element={<h1>Todos los estudiantes</h1>} />
				</Route>

				<Route path='*' element={<div>404 NOT FOUND</div>} />
			</Route>
		</Routes>
	);
};

export default MainRouter;
