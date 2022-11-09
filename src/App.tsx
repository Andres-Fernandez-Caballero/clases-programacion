import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material';

function App(): JSX.Element {
	return (
		<div className='App'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='#'>
						Navbar
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<a className='nav-link active' aria-current='page' href='#'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Link
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle'
									href='#'
									id='navbarDropdown'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Dropdown
								</a>
								<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
									<li>
										<a className='dropdown-item' href='#'>
											Action
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											Another action
										</a>
									</li>
									<li className='dropdown-divider'></li>
									<li>
										<a className='dropdown-item' href='#'>
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item'>
								<a className='nav-link disabled' href='#' aria-disabled='true'>
									Disabled
								</a>
							</li>
						</ul>
						<form className='d-flex'>
							<input
								className='form-control me-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button className='btn btn-outline-success' type='submit'>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
			<Button variant='contained'>Soy un material boton</Button>
		</div>
	);
}

export default App;
