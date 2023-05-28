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
	STATISTICS: 'Estadisticas',
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

	STATISTICS: root + PATH_NAME.STATISTICS,

	TICKET: root + PATH_NAME.TICKET,
	TICKET_CREATE: root + PATH_NAME.TICKET + '/' + PATH_NAME.CREATE,

	LOGIN: root + PATH_NAME.AUTH + '/' + PATH_NAME.LOGIN,
};

export const navBarLinks: ILink[] = [
	{ name: PATH_NAME.HOME, url: URL.HOME },
	{ name: PATH_NAME.STUDENT, url: URL.STUDENT },
	{ name: PATH_NAME.TICKET, url: URL.TICKET },
	{ name: PATH_NAME.STATISTICS, url: URL.STATISTICS },
	{ name: PATH_NAME.ABOUT, url: URL.ABOUT },
];
