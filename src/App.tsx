import MainRouter from '@routes/MainRouter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';

function App(): JSX.Element {
	return (
		<>
			<CssBaseline />
			<MainRouter />
			<ToastContainer />
		</>
	);
}

export default App;
