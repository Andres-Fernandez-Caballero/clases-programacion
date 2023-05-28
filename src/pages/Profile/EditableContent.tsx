import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@mui/material';

export interface EditableContentProps {
	text?: string;
	content: string | number | undefined;
	keyObject: string;
	action: (key: string, value: string | number) => void;
}
export const EditableContent = ({
	text = '',
	content,
	action,
	keyObject,
}: EditableContentProps) => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState<string | number | undefined>(
		content
	);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<article
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<p>
					<strong>{text}</strong>
				</p>
				<p>{content}</p>
				<Button onClick={handleClickOpen}>
					<EditIcon />
				</Button>
			</article>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Editar</DialogTitle>
				<DialogContent>
					<DialogContentText>Editar {text}</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Valor'
						type='text'
						fullWidth
						variant='standard'
						onChange={e => {
							setValue(e.target.value);
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={() => {
							if (value !== undefined) {
								action(
									keyObject,
									typeof content === 'number' ? Number(value) : value
								);
							}
							handleClose();
						}}
					>
						Guardar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
