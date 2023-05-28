import { ClassCreate } from '@pages/class/ClassCreate/ClassCreate';
import React, { FC, ReactElement } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { toast } from 'react-toastify';
import { useClassCreateForm } from '@pages/class/ClassCreate/ClassCreate.hooks';
import {
	IStudentFirebaseEntity,
	ITicketFirebaseEntity,
} from '@interfaces/FirebaseEntitys';
import { OnChangeSelectorDatetime } from '@pages/class/ClassCreate/ClassCreate.interface';
import { useOpenCloseDialogTicket } from '@pages/class/ClassCreate/DialogTicket/DialogTicket.hooks';
import DialogTicket from '@pages/class/ClassCreate/DialogTicket';
import { CLASS_PRICE } from '@constants/price';
import { useAppDispatch, useAppSelector } from '@store/hooks/hook';
import { addTicket } from '@slyces/ticket.slice';
import { URL } from '@constants/routes';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '@/intercept/emailSender.interceptor';
import ReactDomServer from 'react-dom/server';
import { TicketDetail } from '@pages/class/ClassCreate/DialogTicket/TicketDetail';
import { selectAuth } from '@slyces/auth.slyce';

const INIT_DURATION_CLASS = 1;
const DURATION_CLASS_RANGE = 0.5;
const MAX_DURATION_CLASS = 5;

const Component: FC = (): ReactElement => {
	const { user } = useAppSelector(selectAuth);

	const {
		selectProgramingLanguageById,
		selectStudentById,
		ticket,
		selectDuration,
		selectDatetime,
		datetime,
		updatePrice,
		price,
		programingLanguageSelected,
	} = useClassCreateForm(
		INIT_DURATION_CLASS,
		user?.userData?.pricePerHour ?? CLASS_PRICE
	);

	const { openDialogTicket, isOpen, closeDialogTicket } =
		useOpenCloseDialogTicket();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		try {
			if (ticket === undefined) {
				toast.error('Seleccione un usuario');
				return;
			}
			openDialogTicket();
		} catch (event) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			toast.error((event.message as string) ?? 'Error al crear ticket');
		}
	};
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleOnConfirm = (): void => {
		const toastRef = toast.loading('Procesando datos...');
		if (ticket === undefined) toast.error('Ocurrio un error interno');
		dispatch(addTicket(ticket as ITicketFirebaseEntity))
			.then(() => {
				toast.update(toastRef, {
					render: 'Clase almacenada con exito ',
					type: 'success',
					isLoading: false,
					autoClose: 2000,
				});
				closeDialogTicket();
				toast('Enviando Comprobante...', {
					autoClose: 2000,
				});
				if (ticket?.class?.student !== undefined) {
					sendEmail({
						addressed: ticket.class.student.email,
						subject: 'Clase programada',
						messageInHtmlFormat: ReactDomServer.renderToString(
							<section>
								<TicketDetail ticketItem={ticket} />
								<h2>Medios de pago</h2>
								<p>Podes pagar de las siguientes maneras</p>
								<p>
									Mercado pago al siguiente alias{' '}
									<span>{user?.userData?.MpAlias}</span>
								</p>
								<p>
									Transferencia bancaria al siguiente CBU{' '}
									<span>{user?.userData?.CBU}</span>
								</p>
								<p>
									<strong>Gracias por elegirme</strong>
								</p>
							</section>
						),
					})
						.then()
						.catch(() => {
							toast.error('Ocurrio un error al enviar el email');
						});
				}
				navigate(URL.HOME);
			})
			.catch(err => {
				toast.error('Ocurrio un error al crear ticket');
				console.error(err);
			});
	};

	const handleChangeSelectorDatetime: OnChangeSelectorDatetime = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		selectDatetime(event.target.value);
	};

	const handleChangeSelectorProgramingLanguage = (
		event: SelectChangeEvent
	): void => {
		selectProgramingLanguageById(event.target.value);
	};

	const handleChangeSelectorStudent = (
		event: React.SyntheticEvent,
		value: IStudentFirebaseEntity
	): void => {
		selectStudentById(value.id as string);
	};

	const handleChangeSelectorDuration = (
		event: Event,
		newValue: number | number[]
	): void => {
		selectDuration(newValue as number);
	};

	return (
		<>
			<DialogTicket
				popUpVisible={isOpen}
				ticket={ticket}
				price={price}
				updatePrice={updatePrice}
				onClose={closeDialogTicket}
				onConfirm={handleOnConfirm}
			/>

			<ClassCreate
				onSubmit={handleSubmit}
				onChangeSelectorProgramingLanguage={
					handleChangeSelectorProgramingLanguage
				}
				onChangeSelectorStudent={handleChangeSelectorStudent}
				onChangeSelectorDuration={handleChangeSelectorDuration}
				onChangeSelectorDatetime={handleChangeSelectorDatetime}
				programingLanguageSelected={programingLanguageSelected}
				durationStepRange={DURATION_CLASS_RANGE}
				maxDurationClass={MAX_DURATION_CLASS}
				selectedDatetime={datetime}
				initDuration={INIT_DURATION_CLASS}
			/>
		</>
	);
};
export default Component;
