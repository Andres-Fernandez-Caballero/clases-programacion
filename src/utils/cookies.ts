import Cookies from 'universal-cookie';

export const setCookie = (name: string, value: unknown): void => {
	const cookies = new Cookies();
	cookies.set(name, JSON.stringify(value), {
		path: '/',
	});
};

export const getCookie = (name: string) => {
	const cookies = new Cookies();
	return cookies.get(name);
};

export const removeCookie = (name: string): void => {
	const cookies = new Cookies();
	return cookies.remove(name);
};
