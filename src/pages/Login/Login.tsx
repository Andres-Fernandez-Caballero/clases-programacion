import styles from './login.module.css';
import React from 'react';
import { LoginPros } from '@pages/Login/interfaces';

export const Login: React.FC<LoginPros> = ({
	onSubmit,
	onChange,
}: LoginPros): React.ReactElement => {
	return (
		<main className={styles.container}>
			<h1>Identificate 🦖! </h1>
			<form onSubmit={onSubmit}>
				<input
					type='email'
					name='email'
					placeholder='EMAIL'
					required={true}
					onChange={onChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='PASSWORD'
					required={true}
					onChange={onChange}
				/>
				<button type='submit'>Loguin</button>
			</form>
		</main>
	);
};
