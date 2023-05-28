import { selectAuth } from '@slyces/auth.slyce';
import { useAppSelector } from '@store/hooks/hook';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Card } from '@mui/material';
import { EditableContent } from '@pages/Profile/EditableContent';
import UserService from '@services/FirebaseServices/entityServices/UserService';
import { toast } from 'react-toastify';

export const Profile = () => {
	const { user } = useAppSelector(selectAuth);
	const updateUser = (key: string, value: string | number): void => {
		const service = new UserService();
		if (user === null) return;
		console.table({ key, value });
		service
			.updateByUidOneField(user.uid, key, value)
			.then(() => {
				toast.success('Usuario actualizado');
			})
			.catch(error => {
				toast.error(error.message);
			});
	};
	console.log('user', user);
	return (
		<main>
			{user !== null && (
				<Grid2 container spacing={4}>
					<Grid2 xs={12} md={6}>
						<Card>
							<h1>Profile</h1>u<p>{user.displayName}</p>
							<p>{user.email}</p>
						</Card>
					</Grid2>

					<Grid2 xs={12} md={6}>
						<Card>
							<h2>Pagos y Facturacion</h2>
							<EditableContent
								text='Valor de la clase'
								action={updateUser}
								keyObject='pricePerHour'
								content={
									user.userData != null ? user.userData.pricePerHour : ''
								}
							/>

							<h3>Depositovs</h3>
							<EditableContent
								text='Mercado Pago Alias'
								keyObject='MpAlias'
								content={user.userData?.MpAlias}
								action={updateUser}
							/>

							<EditableContent
								text='CBU Bancario'
								keyObject='CBU'
								content={user.userData != null ? user.userData.CBU : ''}
								action={updateUser}
							/>
						</Card>
					</Grid2>
				</Grid2>
			)}
		</main>
	);
};
