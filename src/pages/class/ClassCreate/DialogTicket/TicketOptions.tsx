import { Button } from '@mui/material';

export interface TicketOptionProps {
	onClose: () => void;
	onConfirm: () => void;
}

export const TicketOptions = ({ onClose, onConfirm }: TicketOptionProps) => (
	<>
		<Button onClick={onClose}>Cancelar</Button>
		<Button variant='contained' onClick={onConfirm}>
			Confirmar
		</Button>
	</>
);
