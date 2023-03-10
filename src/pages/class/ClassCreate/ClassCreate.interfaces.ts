import React from 'react';
import { IClassFirebaseEntity } from '@interfaces/FirebaseEntitys';
import { SelectChangeEvent } from '@mui/material';

export interface ClassCreateProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeRange: (event: Event, newValue: number | number[]) => void;
}

export interface ClassCreateDtoHook {
	classDto: IClassFirebaseEntity;
	handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

	handleChangeRange: (event: Event, newValue: number | number[]) => void;

	handleOnChangeProgramingLanguage: (event: SelectChangeEvent) => void;

	handleOnChangeStudent: (event: SelectChangeEvent) => void;

	resetClassDto: () => void;
}
