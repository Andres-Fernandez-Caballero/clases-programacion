import { Moment } from 'moment';

export interface IClass {
	date: Moment;
	time: Moment;
	duration: number;
	programingLeanguage: IProgramingLeanguaje;
	student: IStudent;
}

export interface IStudent {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	created: Moment;
}

export interface IProgramingLeanguaje {
	name: string;
	brand: string;
}
