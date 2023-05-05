import { ITicketFirebaseEntity } from '@/interfaces/FirebaseEntitys';
import TicketService from '@/services/FirebaseServices/entityServices/TicketService';
import { IAsyncState, IStateWhitError } from '@/store/interfaces/state';
import type { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment/moment';

export interface ITicketState extends IAsyncState, IStateWhitError {
	tickets: ITicketFirebaseEntity[];
}

// ticket slice
export const ticketSlice = createSlice({
	name: 'ticket',
	initialState: {
		tickets: [] as ITicketFirebaseEntity[],
		loading: false,
		error: null,
	},

	reducers: {
		setTickets: (state, action: PayloadAction<ITicketFirebaseEntity[]>) => {
			state.tickets = action.payload;
		},
		loadingOff(state) {
			state.loading = false;
		},
		loadingOn(state) {
			state.loading = true;
		},
	},
});

const { setTickets, loadingOff, loadingOn } = ticketSlice.actions;

export const getTickets =
	() =>
	async (
		dispatch: (arg0: {
			payload: ITicketFirebaseEntity[] | undefined;
			type: 'ticket/setTickets' | 'ticket/loadingOff' | 'ticket/loadingOn';
		}) => void
	) => {
		dispatch(loadingOn());
		const service = new TicketService();
		const tickets = (await service.getAll()).sort(
			(a, b) =>
				moment(b.class.dateTime).unix() - moment(a.class.dateTime).unix()
		);
		dispatch(setTickets(tickets));
		dispatch(loadingOff());
	};

export const handlePaidTicket =
	(ticket: ITicketFirebaseEntity) =>
	async (dispatch: (arg0: { payload: unknown; type: string }) => void) => {
		const ticketService = new TicketService();
		dispatch(loadingOn());
		if (ticket.id === undefined) return;
		if (ticket.isPaid) {
			await ticketService.cancelPaidTicket(ticket.id);
		} else {
			await ticketService.paidTicket(ticket.id);
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		dispatch(getTickets());
		dispatch(loadingOff());
	};

export const addTicket =
	(ticket: ITicketFirebaseEntity) =>
	async (dispatch: (arg0: unknown) => void, getState: () => RootState) => {
		try {
			dispatch(loadingOn());
			const ticketService = new TicketService();
			const newTicket = await ticketService.create(ticket);
			console.log('nuevo tiket', newTicket);
			console.log('tickets iniciales', getState().tikets.tickets.length);
			dispatch(getTickets());
			console.log('tickets finales', getState().tikets.tickets.length);
		} finally {
			dispatch(loadingOff());
		}
	};

export const deleteTicket =
	(ticketId: string) => async (dispatch: (arg0: unknown) => void) => {
		await new TicketService().delete(ticketId);
		dispatch(getTickets());
	};

export const selectTickets = (state: RootState) => state.tikets;
export default ticketSlice.reducer;
