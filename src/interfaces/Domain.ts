import { Moment } from 'moment';

export interface IClass {
	dateTime: Moment;
	duration: number;
	programingLeanguage: IProgramingLeanguaje;
	student: IStudent;
}

export interface IStudent {
	firstName: string;
	lastName: string;
	dni: string;
	email: string;
	phone: string;
	lastClass?: Moment;
	firstClass?: Moment;
	birthday: Moment;
}

export interface IProgramingLeanguaje {
	name: string;
}
