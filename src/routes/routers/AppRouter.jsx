import About from 'pages/About';
import ClassCreate from 'pages/class/Create';
import ClassList from 'pages/class/List';
import Home from 'pages/Home';
import NotFound from 'pages/NotFout';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/'
				// @ts-ignore
				index
				element={<Home />}
			/>
			<Route path='about' element={<About />} />
			<Route path='clases/crear' element={<ClassCreate />} />
			<Route path='clases/list' element={<ClassList />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
