import MainRouter from './routes/MainRouter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App(): JSX.Element {
	return (
		<>
			<MainRouter />
			<ToastContainer />
		</>
	);
}

export default App;
