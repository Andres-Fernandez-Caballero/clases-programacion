import { Moment } from 'moment';

export interface IDomain {
	id?: string;
}

export interface IClass extends IDomain {
	dateTime: Moment;
	duration: number;
	programingLeanguage: IProgramingLeanguaje;
	student: IStudent;
}

export interface IStudent extends IDomain {
	firstName: string;
	lastName: string;
	dni: string;
	email: string;
	phone: string;
	birthDate?: Moment;
}

export interface IProgramingLeanguaje extends IDomain {
	name: string;
}
