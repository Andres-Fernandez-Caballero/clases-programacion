import { Login } from './Login';
import React from 'react';
import { login } from '@slyces/auth.slyce';
import { useDtoLogin } from '@pages/Login/dtoLogin.hook';
import { useAppDispatch } from '@store/hooks/hook';
import { toast } from 'react-toastify';
import { URL } from '@constants/routes';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent(): React.ReactElement {
	const { handleChange, dtoLogin, clearDtoLogin } = useDtoLogin();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(login(dtoLogin))
			.then(() => navigate(URL.ROOT))
			.catch((err: { message: string }) => {
				toast.error('ERROR: '.concat(err.message));
			})
			.finally(() => {
				clearDtoLogin();
			});
	};

	return <Login onSubmit={handleSubmit} onChange={handleChange} />;
}
