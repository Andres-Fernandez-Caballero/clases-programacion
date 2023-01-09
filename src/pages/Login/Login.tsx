import { login, selectAuth } from '@/store/slyces/auth.slyce';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.css';

export const Login = () => {
	const auth = useSelector(selectAuth);
	console.log(auth);

	const dispatch = useDispatch();
	const [form, setForm] = useState({ email: '', password: '' });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			dispatch(login(form.email, form.password));
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<main className={styles.container}>
			<h1>Identificate 🦖! </h1>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					placeholder='EMAIL'
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='PASSWORD'
					onChange={handleChange}
				/>
				<button type='submit'>Loguin</button>
			</form>
		</main>
	);
};
