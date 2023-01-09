/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Iuser } from '@/interfaces/auth';
import { signIn, signOut } from '@/services/auth';
import { createSlice } from '@reduxjs/toolkit';
import { IAsyncState, IStateWhitError } from '../interfaces/state';

export interface IAuthState extends IAsyncState, IStateWhitError {
	user: Iuser | null;
	isAuthenticate: boolean;
}

const emptyState: IAuthState = {
	user: null,
	isAuthenticate: false,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: emptyState,
	reducers: {
		setAuth: (state, action) => {
			state.user = action.payload;
			state.isAuthenticate = true;
		},
		clearAuth: state => {
			state.user = null;
			state.isAuthenticate = false;
		},
		loadingOff(state) {
			state.loading = false;
		},
		loadingOn(state) {
			state.loading = true;
		},
	},
});

const { setAuth, clearAuth, loadingOff, loadingOn } = authSlice.actions;

export const login =
	(email: string, password: string) =>
	(
		dispatch: (arg0: {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			payload: any;
			type: 'auth/setAuth' | 'auth/loadingOff' | 'auth/loadingOn';
		}) => void,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getState: () => any
	) => {
		dispatch(loadingOn());
		console.log('loadingOn', getState().auth.loading);

		signIn(email, password)
			.then(userCredential => {
				dispatch(setAuth(userCredential));
				dispatch(loadingOff());
			})
			.catch(error => {
				throw new Error(error);
			})
			.finally(() => {
				dispatch(loadingOff());
			});
	};

export const logout =
	() =>
	(
		dispatch: (arg0: { payload: undefined; type: 'auth/clearAuth' }) => void
	) => {
		signOut()
			.then(() => {
				dispatch(clearAuth());
			})
			.catch(error => {
				throw new Error(error);
			});
	};
// @ts-expect-error
export const selectAuth = state => state.auth;
export default authSlice.reducer;
