import { Moment } from 'moment';
import { IStudent } from '../interfaces/Domain';

export class Student implements IStudent {
	firstName: string;
	lastName: string;
	dni: string;
	email: string;
	phone: string;
	birthDate?: Moment | undefined;
	id?: string | undefined;

	constructor(
		firstName: string,
		lastName: string,
		dni: string,
		email: string,
		phone: string,
		birthDate?: Moment | undefined,
		id?: string | undefined
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dni = dni;
		this.email = email;
		this.phone = phone;
		this.birthDate = birthDate;
		this.id = id;
	}

	static fromDto(dto: IStudent): Student {
		return new Student(
			dto.firstName,
			dto.lastName,
			dto.dni,
			dto.email,
			dto.phone,
			dto.birthDate,
			dto.id
		);
	}

	fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}
