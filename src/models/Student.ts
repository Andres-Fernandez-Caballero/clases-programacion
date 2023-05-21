import { IStudentFirebaseEntity } from '@interfaces/FirebaseEntitys';
import moment from 'moment';
import { ZodiacSign } from '@interfaces/Domain';
import { getZodiac } from '@/intercept/zodiac.interceptor';
import { DATE_FORMAT_DIA_MES_ANIO } from '@constants/date';

class Student {
	private readonly firstName: string;
	private readonly lastName: string;
	private readonly dni: string;
	private readonly email: string;
	private readonly phone: string;
	private readonly birthDate: string;

	constructor(student: IStudentFirebaseEntity) {
		this.firstName = student.firstName;
		this.lastName = student.lastName;
		this.dni = student.dni;
		this.email = student.email;
		this.phone = student.phone;
		this.birthDate = student.birthDate;
	}

	public get FirstName(): string {
		return this.firstName;
	}

	public get LastName(): string {
		return this.lastName;
	}

	public get Dni(): string {
		return this.dni;
	}

	public get Email(): string {
		return this.email;
	}

	public get Phone(): string {
		return this.phone;
	}

	public get BirthDate(): string {
		return moment(this.birthDate).format(DATE_FORMAT_DIA_MES_ANIO);
	}

	public get FullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	public get Age(): number {
		const today = moment();
		const birthDate = moment(this.birthDate);
		return today.diff(birthDate, 'years');
	}

	public async getZodiacSign(): Promise<ZodiacSign> {
		return await getZodiac(this.birthDate);
	}
}

export default Student;
