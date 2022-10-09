// make a test over the RouterProtector component

import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RouteProtecor from './RouterProtector';

describe('RouterProtector unit test', () => {
	it('should protect a route rediret to indicate page', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route path='/' element={<h1>index</h1>} />
					<Route
						element={
							<RouteProtecor isAllowed={false} redirectTo='/' />
						}
					>
						<Route
							path='/protected-route'
							element={<h1>Protected Route</h1>}
						/>
					</Route>
				</Routes>
			</MemoryRouter>
		);

		expect(screen.getByText('index')).toBeInTheDocument();
	});

	it('should allow access to a route', () => {
		render(
			<MemoryRouter initialEntries={['/protected-route']}>
				<Routes>
					<Route path='/' element={<h1>index</h1>} />
					<Route
						element={
							<RouteProtecor isAllowed={true} redirectTo='/' />
						}
					>
						<Route
							path='/protected-route'
							element={<h1>Protected Route</h1>}
						/>
					</Route>
				</Routes>
			</MemoryRouter>
		);

		expect(screen.getByText('Protected Route')).toBeInTheDocument();
	});
});
