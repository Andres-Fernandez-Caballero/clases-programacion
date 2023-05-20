import { IClass, IProgramingLanguage, IStudent, ITicket } from './Domain';

export interface IFirebaseEntity {
	id?: string;
	created?: string;
}

export interface IUserDataFirebaseEntity extends IFirebaseEntity {
	pricePerHour: number;
	CBU: string;
	MpAlias: string;
}

export interface IClassFirebaseEntity extends IFirebaseEntity, IClass {}

export interface IStudentFirebaseEntity extends IFirebaseEntity, IStudent {}

export interface IProgramingLeanguajeFirebaseEntity
	extends IFirebaseEntity,
		IProgramingLanguage {}

export interface ITicketFirebaseEntity extends IFirebaseEntity, ITicket {}
