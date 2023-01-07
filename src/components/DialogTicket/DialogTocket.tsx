import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	TextField,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import moment from 'moment';
import { IClassFirebaseEntity } from '../../interfaces/FirebaseEntitys';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import React, { ChangeEvent } from 'react';
import { TransitionProps } from '@mui/material/transitions';

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
	classState: IClassFirebaseEntity;
	popUpVisible: boolean;
	price: number;
	handleClose: () => void;
	handleChangePrice: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleOnConfirm: () => void;
}

export const DialogTicket = ({
	classState,
	popUpVisible,
	price,
	handleClose,
	handleChangePrice,
	handleOnConfirm,
}: DialogTicketProps) => {
	return (
		<Dialog
			open={popUpVisible}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogTitle>{'Ticket'}</DialogTitle>
			<DialogContent>
				<DialogContentText id='price-input'>
					<h2>
						Clases de programacion en {classState.programingLeanguage.name}
					</h2>
					<h3>Datos del alumno</h3>
					<p>
						<span>Nombre: </span>
						{classState.student.firstName} {classState.student.lastName}
					</p>
					<p>
						<span>Dni: </span>
						{classState.student.dni}
					</p>
					<h3>Datos de la clase</h3>
					<p>tema de la clase: {classState.programingLeanguage.name}</p>
					<p>
						fecha de la clase:{' '}
						{moment(classState.dateTime).format('yyyy-mm-DD')}
					</p>
					<p>hora de la clase: {moment(classState.dateTime).format('HH:mm')}</p>
					<p>duracion de la clase: {classState.duration} horas</p>

					<p>valor de la clase: {price}</p>
					<h4>Total: ${price * classState.duration}</h4>
				</DialogContentText>
				<Grid2 container>
					<Grid2 xs={12} md={6}>
						<TextField
							id='price'
							label='Valor de la clase'
							name='price'
							type='number'
							onChange={handleChangePrice}
							value={price}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid2>
					<Grid2 xs={12} md={6}>
						<Button variant='outlined' size='small'>
							<MoneyOffIcon /> -10%
						</Button>
					</Grid2>
				</Grid2>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => {
						handleClose();
					}}
				>
					Cancelar
				</Button>
				<Button
					onClick={() => {
						handleOnConfirm();
						handleClose();
					}}
				>
					Confirmar
				</Button>
			</DialogActions>
		</Dialog>
	);
};
