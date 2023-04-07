import React, { ReactNode } from 'react';
import { AutocompleteChangeReason, SelectChangeEvent } from '@mui/material';
import {
	IProgramingLeanguajeFirebaseEntity,
	IStudentFirebaseEntity,
} from '@interfaces/FirebaseEntitys';

export type EventGeneric = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type OnChangeSelectorStudent = (
	event: React.SyntheticEvent,
	value: IStudentFirebaseEntity,
	reason: AutocompleteChangeReason
) => void;

export type OnChangeSelectorDuration = (
	event: Event,
	newValue: number | number[]
) => void;

export type OnChangeSelectorDatetime = EventGeneric;
export interface ClassCreateProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

	onChangeSelectorProgramingLanguage: (
		event: SelectChangeEvent<string>,
		child: ReactNode
	) => void;
	onChangeSelectorStudent: OnChangeSelectorStudent;
	programingLanguageSelected: IProgramingLeanguajeFirebaseEntity;

	onChangeSelectorDuration: OnChangeSelectorDuration;

	onChangeSelectorDatetime: OnChangeSelectorDatetime;

	maxDurationClass: number;
	durationStepRange: number;
	initDuration: number;
	selectedDatetime: string;
}

export interface SelectStudentProps {
	onChangeSelector: (
		event: React.SyntheticEvent,
		value: IStudentFirebaseEntity,
		reason: string,
		details?: string
	) => void;
	students: IStudentFirebaseEntity[];
}

export interface SelectProgramingLanguageProps {
	onChangeSelector: OnChangeSelectorStudent;
	programingLanguageSelected: IProgramingLeanguajeFirebaseEntity;
}

export interface SelectDurationProps {
	onChange: OnChangeSelectorDuration;
	rangeMax: number;
	step: number;
	initValue: number;
}

export interface SelectorDatetimeProps {
	onChange: OnChangeSelectorDatetime;
	selectedDatetime: string;
}
