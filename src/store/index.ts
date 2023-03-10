import { configureStore } from '@reduxjs/toolkit';
import authSlyce from './slyces/auth.slyce';
import ticketSlice from './slyces/ticket.slice';
import studentsSlice from '@slyces/students.slice';

const store = configureStore({
	reducer: {
		auth: authSlyce,
		tikets: ticketSlice,
		students: studentsSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
