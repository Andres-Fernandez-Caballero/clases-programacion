import {
	IClassFirebaseEntity,
	IProgramingLeanguajeFirebaseEntity,
	IStudentFirebaseEntity,
	ITicketFirebaseEntity,
} from '@interfaces/FirebaseEntitys';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@store/hooks/hook';
import { selectStudents } from '@slyces/students.slice';
import { programingLanguages } from '@constants/programingLanguages';
import { FORM_FORMAT_DATE } from '@constants/date';
import { CLASS_PRICE } from '@constants/price';

export const useClassCreateForm = (
	initDurationClass: number,
	classPrice: number = CLASS_PRICE
) => {
	const { students } = useAppSelector(selectStudents);
	const [studentSelected, setStudentSelected] =
		useState<IStudentFirebaseEntity>();
	const [programingLanguageSelected, setProgramingLanguageSelected] =
		useState<IProgramingLeanguajeFirebaseEntity>(
			programingLanguages.filter(
				language => language.name.toLowerCase() === 'javascript'
			)[0]
		);
	const [duration, setDuration] = useState<number>(initDurationClass);
	const [datetime, setDatetime] = useState<string>(
		moment().format(FORM_FORMAT_DATE)
	);
	const [price, setPrice] = useState<number>(classPrice);
	const [ticket, setTicket] = useState<ITicketFirebaseEntity | undefined>();

	useEffect(() => {
		updateTicket();
	}, [price, studentSelected, programingLanguageSelected, duration, datetime]);

	const selectStudentById = (idUser: string) => {
		const studentFind = students.find(
			(student: IStudentFirebaseEntity) => student.id === idUser
		);
		if (studentFind === undefined) throw new Error('Student not found');
		setStudentSelected(studentFind);
	};

	const selectProgramingLanguageById = (idProgramingLanguage: string) => {
		const programingLanguageFind = programingLanguages.find(
			(programingLanguage: IProgramingLeanguajeFirebaseEntity) =>
				programingLanguage.id === idProgramingLanguage
		);
		if (programingLanguageFind === undefined)
			throw new Error('Programing language not found');
		setProgramingLanguageSelected(programingLanguageFind);
		console.log(programingLanguageSelected);
	};

	const selectDuration = (duration: number) => {
		if (duration < 0) throw new Error('Duration is negative');
		setDuration(duration);
	};

	const selectDatetime = (datetime: string) => {
		const date = moment(datetime);
		if (!date.isValid()) throw new Error('Datetime is not valid');
		// if (date.isAfter(moment())) throw new Error('Datetime is after now');
		setDatetime(datetime);
	};

	const createClass = (): IClassFirebaseEntity => {
		if (studentSelected == null) throw new Error('Seleccione un estudiante');
		if (programingLanguageSelected == null)
			throw new Error('Programing language not found');

		return {
			dateTime: moment(datetime).format('YYYY-MM-DDTHH:mm'),
			duration,
			programingLanguage: programingLanguageSelected,
			student: studentSelected,
		};
	};

	const createTicket = (): ITicketFirebaseEntity | undefined => {
		if (studentSelected === undefined) return undefined;
		return {
			amount: getAmount(),
			date: moment().format('YYYY-MM-DDTHH:mm'),
			isPaid: false,
			class: createClass(),
		};
	};

	const updateTicket = (): void => {
		setTicket(createTicket());
	};

	const getAmount = (): number => {
		if (studentSelected === undefined) return 0;
		return price * duration;
	};

	const updatePrice = (newPrice: number) => {
		if (newPrice < 0) throw new Error('El precio no puede ser negativo');
		setPrice(newPrice);
	};

	return {
		updateTicket,
		ticket,
		selectStudentById,
		selectProgramingLanguageById,
		selectDatetime,
		selectDuration,
		programingLanguageSelected,
		datetime,
		getAmount,
		price,
		updatePrice,
	};
};
