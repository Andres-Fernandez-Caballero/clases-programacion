import { ITicketFirebaseEntity } from '@/interfaces/FirebaseEntitys';
import TicketService from '@/services/FirebaseServices/entityServices/TicketService';
import { IAsyncState, IStateWhitError } from '@/store/interfaces/state';

import type { RootState } from '@/store/index';
import { createSlice } from '@reduxjs/toolkit';

export interface ITicketState extends IAsyncState, IStateWhitError {
	tickets: ITicketFirebaseEntity[];
}

// ticket slice
export const ticketSlice = createSlice({
	name: 'ticket',
	initialState: {
		tickets: [],
		loading: false,
		error: null,
	},
	reducers: {
		setTickets: (state, action) => {
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
			payload: unknown;
			type: 'ticket/setTickets' | 'ticket/loadingOff' | 'ticket/loadingOn';
		}) => void
	) => {
		dispatch(loadingOn());
		const service = new TicketService();
		const tickets = await service.getAll();
		dispatch(setTickets(tickets));
		dispatch(loadingOff());
	};

export const selectTickets = (state: RootState) => state.tikets;

export default ticketSlice.reducer;
