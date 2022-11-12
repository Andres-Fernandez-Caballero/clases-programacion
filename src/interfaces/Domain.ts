import { Moment } from 'moment';
import { IFirebaseEntity } from './FirebaseEntitys';

export interface IClass extends IFirebaseEntity {
	date: Moment;
	time: Moment;
	duration: number;
	programingLeanguage: IProgramingLeanguaje;
	student: IStudent;
}

export interface IStudent extends IFirebaseEntity {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	created: Moment;
}

export interface IProgramingLeanguaje extends IFirebaseEntity {
	name: string;
	brand: string;
}
