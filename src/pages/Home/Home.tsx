import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAuth,
	IAuthState,
	login,
	logout,
} from '@/store/slyces/auth.slyce';

export const Home: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const auth = useSelector(selectAuth) as IAuthState;
	useEffect(() => {
		dispatch(
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			login('andres.fernandezcaballero@davinci.edu.ar', 'DorianElGris1986')
		);
	}, []);
	return (
		<>
			{auth.loading && <h1>Loading...</h1>}
			{auth.user !== null && (
				<main>
					<h1>Bienvenido {auth.user.email}</h1>
					<section>
						<h2>Información de la cuenta</h2>
						<p>Nombre: {auth.user.displayName}</p>
						<p>Email: {auth.user.email}</p>
						<button
							onClick={() => {
								// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
								// @ts-ignore
								dispatch(logout());
							}}
						>
							Logout
						</button>
					</section>
				</main>
			)}
		</>
	);
};
