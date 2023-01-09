import { useDispatch } from 'react-redux';
import { logout } from '@/store/slyces/auth.slyce';

export const Home: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	return (
		<>
			<button
				onClick={() => {
					// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
					// @ts-ignore
					dispatch(logout());
				}}
			>
				Logout
			</button>
		</>
	);
};
