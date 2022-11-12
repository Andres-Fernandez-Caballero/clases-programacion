import { Button } from '@mui/material';
import Navbar from './components/layouts/Navbar';
import { navBarLinks } from './constants/navLinks';

function App(): JSX.Element {
	return (
		<div className='App'>
			<Navbar navLinks={navBarLinks} />
			<Button variant='contained'>Soy un material boton</Button>
		</div>
	);
}

export default App;
