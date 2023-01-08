import { IUserCredential } from './firebaseAuth';

export interface IloginDto {
	email: string;
	password: string;
}

export interface Iuser extends IUserCredential {}
