import { useState } from 'react';

export const useToggle = () => {
	const [open, setOpen] = useState<null | HTMLElement>(null);

	function toggleOpen(target: EventTarget) {
		setOpen(target as HTMLElement);
	}

	function toggleClose() {
		setOpen(null);
	}

	return { state: open, toggleOpen, toggleClose };
};
