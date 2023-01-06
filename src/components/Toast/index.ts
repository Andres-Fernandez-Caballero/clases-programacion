import { toast } from 'react-toastify';

export const message = (menssageText = 'hello world') => {
	toast(menssageText);
};
export const messageError = (menssageText = 'hello world') => {
	toast.error(menssageText, {
		position: 'top-right',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};
