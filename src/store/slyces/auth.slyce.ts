/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Iuser } from '@/interfaces/auth';
import { signIn, signOut } from '@/services/auth';
import { createSlice } from '@reduxjs/toolkit';
import { IAsyncState, IStateWhitError } from '../interfaces/state';
import Cookie from 'universal-cookie';
import type { RootState } from '@/store/index';

export interface IAuthState extends IAsyncState, IStateWhitError {
	user: Iuser | null;
	isAuthenticate: boolean;
}

const COOKIE_STORE_AUTH = 'dharz';
const setCookie = (data: unknown, store: string) => {
	const cookies = new Cookie();
	cookies.set(store, data, { path: '/' });
};

const getCookie = (store: string): Iuser | undefined => {
	const cookies = new Cookie();
	return cookies.get(store);
};

const clearCookie = (store: string) => {
	const cookies = new Cookie();
	cookies.remove(store, { path: '/' });
};

const initstate = (): IAuthState => {
	const credentials = getCookie(COOKIE_STORE_AUTH);
	return credentials !== undefined
		? { user: credentials, isAuthenticate: true, loading: false, error: null }
		: { user: null, isAuthenticate: false, loading: false, error: null };
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initstate(),
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
				setCookie(userCredential, COOKIE_STORE_AUTH);
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
				clearCookie(COOKIE_STORE_AUTH);
			})
			.catch(error => {
				throw new Error(error);
			});
	};

export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
