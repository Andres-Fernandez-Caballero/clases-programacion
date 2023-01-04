export interface IClassCreateDto {
	date: string;
	time: string;
	duration: number | number[];
	programingLanguageName: string;
	studentDni: string;
}

export interface IStudentCreateDto {
	firstName: string;
	lastName: string;
	dni: string;
	email: string;
	phone: string;
	birthDate: string;
}
