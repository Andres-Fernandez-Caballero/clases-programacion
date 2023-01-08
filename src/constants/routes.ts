import { ILink } from '@interfaces/ILink';

export const PATH_NAME = {
	HOME: 'Home',
	ABOUT: 'About',
	STUDENT: 'Estudiantes',
	CLASS: 'Clases',
	CREATE: 'Create',
	CREATE_STUDENT: 'Crear Alumno',
	CREATE_CLASS: 'Crear Clase',
};

const root = '/';

export const URL = {
	HOME: root,
	ABOUT: root + PATH_NAME.ABOUT,
	STUDENT: root + PATH_NAME.STUDENT,
	STUDENT_CREATE: root + PATH_NAME.STUDENT + '/' + PATH_NAME.CREATE,
	CLASS: root + PATH_NAME.CLASS,
	CLASS_CREATE: root + PATH_NAME.CLASS + '/' + PATH_NAME.CREATE,
};

export const navBarLinks: ILink[] = [
	{ name: PATH_NAME.HOME, url: URL.HOME },
	{ name: PATH_NAME.ABOUT, url: URL.ABOUT },
	{ name: PATH_NAME.CREATE_STUDENT, url: URL.STUDENT_CREATE },
	{ name: PATH_NAME.CREATE_CLASS, url: URL.CLASS_CREATE },
];
