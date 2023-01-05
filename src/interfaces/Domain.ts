export interface IClass {
	dateTime: string;
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
	birthDate: string;
}

export interface IProgramingLeanguaje {
	name: string;
}

export interface ITicket {
	amount: number;
	class: IClass;
	isPaid: boolean;
	date: string; // date of the ticket;
	paymentDate?: string | ''; // date of the payment;
}
