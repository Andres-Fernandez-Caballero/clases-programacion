import Navbar from './components/layouts/Navbar';
import { navBarLinks } from './constants/navLinks';

function App(): JSX.Element {
	return (
		<div className='App'>
			<Navbar navLinks={navBarLinks} />
		</div>
	);
}

export default App;
