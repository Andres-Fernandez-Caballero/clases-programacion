import MainRouter from '@routes/MainRouter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';
import { ReactElement, useEffect } from 'react';
import { getTickets } from '@slyces/ticket.slice';
import { useAppDispatch } from '@store/hooks/hook';
import { getStudents } from '@slyces/students.slice';
import { messageError } from '@components/Toast';

function App(): ReactElement {
	const dispatch = useAppDispatch();
	useEffect(() => {
		Promise.all([dispatch(getTickets()), dispatch(getStudents())]).catch(() => {
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
