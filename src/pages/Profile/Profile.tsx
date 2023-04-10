import { selectAuth } from '@slyces/auth.slyce';
import { useAppSelector } from '@store/hooks/hook';

export const Profile = () => {
	const { user } = useAppSelector(selectAuth);
	return (
		<div>
			{user !== null && (
				<>
					<h1>Profile</h1>

					<section>
						<h2>User Data</h2>
						<p>Username: {user.displayName}</p>

						<section>
							<h2>Pagos y factuacion</h2>
							<p>Valor de la clase: {user.userData?.pricePerHour}</p>
						</section>
					</section>
				</>
			)}
		</div>
	);
};
