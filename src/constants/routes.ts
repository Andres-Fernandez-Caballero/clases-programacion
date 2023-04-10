import { ILink } from '@interfaces/ILink';

const root = '/';

export const PATH_NAME = {
	ROOT: root,
	HOME: 'Home',
	PROFILE: 'Profile',
	ABOUT: 'About',
	STUDENT: 'Alumnos',
	CLASS: 'Clases',
	CREATE: 'Create',
	CREATE_STUDENT: 'Crear Alumno',
	CREATE_CLASS: 'Crear Clase',
	AUTH: 'auth',
	LOGIN: 'login',
	TICKET: 'recibos',
};

export const URL = {
	ROOT: root,
	HOME: root,

	PROFILE: root + PATH_NAME.PROFILE,
	ABOUT: root + PATH_NAME.ABOUT,

	STUDENT: root + PATH_NAME.STUDENT,
	STUDENT_CREATE: root + PATH_NAME.STUDENT + '/' + PATH_NAME.CREATE,

	CLASS: root + PATH_NAME.CLASS,
	CLASS_CREATE: root + PATH_NAME.CLASS + '/' + PATH_NAME.CREATE,

	TICKET: root + PATH_NAME.TICKET,
	TIKECT_CREATE: root + PATH_NAME.TICKET + '/' + PATH_NAME.CREATE,

	LOGIN: root + PATH_NAME.AUTH + '/' + PATH_NAME.LOGIN,
};

export const navBarLinks: ILink[] = [
	{ name: PATH_NAME.HOME, url: URL.HOME },
	{ name: PATH_NAME.PROFILE, url: URL.PROFILE },
	{ name: PATH_NAME.STUDENT, url: URL.STUDENT },
	{ name: PATH_NAME.CREATE_STUDENT, url: URL.STUDENT_CREATE },
	{ name: PATH_NAME.CREATE_CLASS, url: URL.CLASS_CREATE },
	{ name: PATH_NAME.TICKET, url: URL.TICKET },
	{ name: PATH_NAME.ABOUT, url: URL.ABOUT },
];
