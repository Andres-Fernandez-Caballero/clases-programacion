import { IProgramingLeanguaje, IStudent } from './Domain';

export interface IClassCreateDto {
	date: string;
	time: string;
	duration: number;
	programingLanguage?: IProgramingLeanguaje;
	student?: IStudent;
}

export interface IStudentCreateDto {
	firstName: string;
	lastName: string;
	dni: string;
	email: string;
	phone: string;
	birthDate: string;
}
