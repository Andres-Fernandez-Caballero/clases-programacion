import { useState } from 'react';

export const useOpenCloseDialogTicket = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const closeDialogTicket = () => setIsOpen(false);
	const openDialogTicket = () => setIsOpen(true);

	return {
		closeDialogTicket,
		openDialogTicket,
		isOpen,
	};
};
