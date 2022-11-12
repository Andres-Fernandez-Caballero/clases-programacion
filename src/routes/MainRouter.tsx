import { Route, Routes } from 'react-router-dom';
import NavigableLayour from '../components/layers/NavigableLayout';
import { navBarLinks } from '../constants/navLinks';
import ClassCreate from '../pages/class/ClassCreate';
import Home from '../pages/Home';

const MainRouter = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route
			path='class/create'
			element={
				<NavigableLayour navBarLinks={navBarLinks}>
					<ClassCreate />
				</NavigableLayour>
			}
		/>
		<Route path='*' element={<div>404 NOT FOUND</div>} />
	</Routes>
);

export default MainRouter;
