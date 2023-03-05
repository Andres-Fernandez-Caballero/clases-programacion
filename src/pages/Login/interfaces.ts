import { IloginDto } from '@interfaces/auth';
import React from 'react';

export interface LoginPros {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IUseDtoLogin {
	dtoLogin: IloginDto;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	clearDtoLogin: () => void;
}
