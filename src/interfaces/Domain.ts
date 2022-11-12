import { Moment } from 'moment';
import { IFirebaseEntity } from './FirebaseEntitys';

export interface IClass extends IFirebaseEntity {
	dateTime: Moment;
	duration: number;
	programingLeanguage: IProgramingLeanguaje | undefined;
	student: IStudent | undefined;
}

export interface IStudent extends IFirebaseEntity {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	created?: Moment;
}

export interface IProgramingLeanguaje extends IFirebaseEntity {
	name: string;
}
