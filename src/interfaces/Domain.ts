export interface IClass {
	dateTime: string;
	duration: number;
	programingLanguage: IProgramingLanguage;
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

export interface IProgramingLanguage {
	name: string;
}

export interface ITicket {
	amount: number;
	class: IClass;
	isPaid: boolean;
	date: string; // date of the ticket;
	paymentDate?: string | ''; // date of the payment;
}
