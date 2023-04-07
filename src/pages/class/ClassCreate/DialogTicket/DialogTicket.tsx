import React from 'react';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import { TransitionProps } from '@mui/material/transitions';
import { TicketDetail } from '@pages/class/ClassCreate/DialogTicket/TicketDetail';
import { TicketOptions } from '@pages/class/ClassCreate/DialogTicket/TicketOptions';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
} from '@mui/material';
import { InputAmount } from '@pages/class/ClassCreate/DialogTicket/InputAmount';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<
			unknown,
			string | React.JSXElementConstructor<unknown>
		>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export interface DialogTicketProps {
	popUpVisible: boolean;
	onClose: () => void;
	onConfirm: () => void;
	ticket: ITicketFirebaseEntity | undefined;
	price: number;

	updatePrice: (newPrice: number) => void;
}

export const DialogTicket = ({
	popUpVisible,
	onClose,
	onConfirm,
	ticket,
	price,
	updatePrice,
}: DialogTicketProps) => {
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updatePrice(Number(event.target.value));
	};
	return (
		<Dialog
			open={popUpVisible}
			TransitionComponent={Transition}
			keepMounted
			onClose={onClose}
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogTitle>{'Resumen de la clase'}</DialogTitle>
			{ticket !== undefined && (
				<DialogContent>
					<DialogContentText id='price-input'>
						<TicketDetail ticketItem={ticket} />
					</DialogContentText>
					<InputAmount onChange={handleOnChange} pricePerHour={price} />
				</DialogContent>
			)}
			<DialogActions>
				<TicketOptions onClose={onClose} onConfirm={onConfirm} />
			</DialogActions>
		</Dialog>
	);
};
