import { Route, Routes } from 'react-router-dom';
import NavigableLayour from '../components/layers/NavigableLayout';
import { navBarLinks } from '../constants/navLinks';
import About from '../pages/About';
import ClassCreate from '../pages/class/ClassCreate';
import Home from '../pages/Home';
import StudentCreate from '../pages/student/StudentCreate';

const MainRouter = () => {
	return (
		<NavigableLayour navBarLinks={navBarLinks}>
			<Routes>
				<Route path='/' index element={<Home />} />
				<Route path='/About' index element={<About />} />
				<Route path='class' element={<ClassCreate />}>
					<Route path='create' element={<ClassCreate />} />
				</Route>
				<Route path='student'>
					<Route path='create' element={<StudentCreate />} />
					<Route index element={<h1>Todos los estudiantes</h1>} />
				</Route>

				<Route path='*' element={<div>404 NOT FOUND</div>} />
			</Routes>
		</NavigableLayour>
	);
};

export default MainRouter;
