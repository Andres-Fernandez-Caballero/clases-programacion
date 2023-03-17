import { IClassFirebaseEntity } from '@interfaces/FirebaseEntitys';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { ClassCreateDtoHook } from '@pages/class/ClassCreate/ClassCreate.interfaces';
import { SelectChangeEvent } from '@mui/material';

export const useClassCreateDto = (): ClassCreateDtoHook => {
	const initState: IClassFirebaseEntity = {
		dateTime: moment().format('YYYY-MM-DDTHH:mm'),
		duration: 1,
		programingLeanguage: { name: '' },
		student: {
			dni: moment().format('YYYYMMDDHHmmss'),
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			birthDate: '',
		},
	};

	const [classDto, setClassDto] = useState(initState);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClassDto({
			...classDto,
			[event.target.name]: event.target.value,
		});
	};

	const handleChangeRange = (event: Event, newValue: number | number[]) => {
		setClassDto({
			...classDto,
			duration: newValue as number,
		});
	};

	const handleOnChangeProgramingLanguage = (event: SelectChangeEvent) => {
		setClassDto({
			...classDto,
			programingLeanguage: { name: event.target.value },
		});
	};

	const handleOnChangeStudent = (/* event: SelectChangeEvent */) => {
		const studentFind = undefined;
		/*     students.find(
            (student: IStudent) => student.dni === event.target.value
        );
        */

		setClassDto({
			...classDto,
			student:
				// TODO: revisar esto es raro
				studentFind !== undefined
					? studentFind
					: {
							dni: '',
							firstName: '',
							lastName: '',
							email: '',
							phone: '',
							birthDate: '',
					  },
		});
	};

	const resetClassDto = (): void => {
		setClassDto(initState);
	};

	return {
		classDto,
		handleOnChange,
		handleChangeRange,
		handleOnChangeProgramingLanguage,
		handleOnChangeStudent,
		resetClassDto,
	};
};
