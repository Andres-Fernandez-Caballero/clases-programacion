import { Login } from './Login';
import React from 'react';
import { login, selectAuth } from '@slyces/auth.slyce';
import { useDtoLogin } from '@pages/Login/dtoLogin.hook';
import { useAppDispatch, useAppSelector } from '@store/hooks/hook';

export default function LoginComponent(): React.ReactElement {
	const { handleChange, dtoLogin, clearDtoLogin } = useDtoLogin();
	const dispatch = useAppDispatch();
	const auth = useAppSelector(selectAuth);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			dispatch(login(dtoLogin))
				.then()
				.catch(() => {
					alert(auth.error);
				})
				.finally(() => {
					console.log('finally');
				});
		} catch (err) {
			alert('error al login');
		} finally {
			clearDtoLogin();
		}
	};

	return <Login onSubmit={handleSubmit} onChange={handleChange} />;
}
