import { IClass, IProgramingLeanguaje, IStudent, ITicket } from './Domain';

export interface IFirebaseEntity {
	id?: string;
	created?: string;
}

export interface IClassFirebaseEntity extends IFirebaseEntity, IClass {}

export interface IStudentFirebaseEntity extends IFirebaseEntity, IStudent {}

export interface IProgramingLeanguajeFirebaseEntity
	extends IFirebaseEntity,
		IProgramingLeanguaje {}

export interface ITicketFirebaseEntity extends IFirebaseEntity, ITicket {}
