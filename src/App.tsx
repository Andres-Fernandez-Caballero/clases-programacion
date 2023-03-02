import MainRouter from '@routes/MainRouter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch } from '@store/hooks/hook';
import { getTickets } from '@slyces/ticket.slice';

function App(): React.ReactElement {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getTickets())
			.then(() => console.log('Tickets loaded'))
			.catch(() => console.log('Error'));
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
