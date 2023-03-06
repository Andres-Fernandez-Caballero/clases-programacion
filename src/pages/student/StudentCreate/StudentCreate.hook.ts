import { IStudentFirebaseEntity } from '@interfaces/FirebaseEntitys';
import React, { useState } from 'react';

export const useDtoStudentCreate = () => {
	const initState: IStudentFirebaseEntity = {
		firstName: '',
		lastName: '',
		dni: '',
		email: '',
		phone: '',
		birthDate: '',
	};

	const [studentState, setStudentState] = useState(initState);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStudentState({
			...studentState,
			[event.target.name]: event.target.value,
		});
	};

	const resetForm = () => {
		setStudentState(initState);
	};

	return {
		studentState,
		handleOnChange,
		resetForm,
	};
};
