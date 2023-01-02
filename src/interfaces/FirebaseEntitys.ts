export interface IFirebaseEntity {
	id?: string;
	created?: string;
}

export interface IClassFirebaseEntity extends IFirebaseEntity {
	dateTime: string;
	duration: number;
	programingLeanguage: IProgramingLeanguajeFirebaseEntity;
	student: IStudentFirebaseEntity;
}

export interface IStudentFirebaseEntity extends IFirebaseEntity {
	firstName: string;
	lastName: string;
	dni: string;
	email: string;
	phone: string;
	birthDate: string;
}

export interface IProgramingLeanguajeFirebaseEntity extends IFirebaseEntity {
	name: string;
}
