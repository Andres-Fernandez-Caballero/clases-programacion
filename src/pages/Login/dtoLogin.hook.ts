import { IloginDto } from '@interfaces/auth';
import React, { useState } from 'react';
import { IUseDtoLogin } from '@pages/Login/interfaces';

export const useDtoLogin = (): IUseDtoLogin => {
	const initState: IloginDto = {
		email: '',
		password: '',
	};

	const [dtoLogin, setDtoLogin] = useState(initState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDtoLogin({
			...dtoLogin,
			[e.target.name]: e.target.value,
		});
	};

	const clearDtoLogin = () => {
		setDtoLogin(initState);
	};

	return { dtoLogin, handleChange, clearDtoLogin };
};
