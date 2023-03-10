import MainRouter from '@routes/MainRouter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';
import { ReactElement, useEffect } from 'react';
import { getTickets } from '@slyces/ticket.slice';
import { useAppDispatch, useAppSelector } from '@store/hooks/hook';
import { getStudents, selectStudents } from '@slyces/students.slice';
import { messageError } from '@components/Toast';

function App(): ReactElement {
	const dispatch = useAppDispatch();
	const { students } = useAppSelector(selectStudents);

	useEffect(() => {
		Promise.all([dispatch(getTickets()), dispatch(getStudents())])
			.then(() => {
				console.log('Todos los recursos cargados');
				console.log('students', students);
			})
			.catch(() => {
				console.error('no se pudieron cargar los recursos');
				messageError('no se pudieron cargar los recursos');
			});
	}, []);

	return (
		<>
			<CssBaseline />
			<MainRouter />
			<ToastContainer />
		</>
	);
}

export default App;
