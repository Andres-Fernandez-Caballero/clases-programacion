/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IloginDto, Iuser } from '@/interfaces/auth';
import { signIn, signOut } from '@/services/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncState, IStateWhitError } from '../interfaces/state';
import type { RootState } from '@/store';
import { COOKIE_AUTH } from '@constants/cookies';
import { setCookie, getCookie, removeCookie } from '@utils/cookies';

export interface IAuthState extends IAsyncState, IStateWhitError {
	user: Iuser | null;
	isAuthenticate: boolean;
}

const defaultState: IAuthState = {
	user: null,
	isAuthenticate: false,
	loading: false,
	error: null,
};
const initState = (): IAuthState => {
	const credentials = getCookie(COOKIE_AUTH);
	return credentials !== undefined
		? { ...defaultState, user: credentials, isAuthenticate: true }
		: defaultState;
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initState(),
	reducers: {
		setAuth: (state: IAuthState, action: PayloadAction<Iuser>) => {
			state.user = action.payload;
			state.isAuthenticate = true;
		},
		clearAuth: (state: IAuthState) => {
			state.user = defaultState.user;
			state.isAuthenticate = defaultState.isAuthenticate;
			state.error = defaultState.error;
			state.loading = defaultState.loading;
		},
		loadingOff(state: IAuthState) {
			state.loading = false;
		},
		loadingOn(state: IAuthState) {
			state.loading = true;
		},
		setError: (state: IAuthState, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
	},
});

const { setAuth, clearAuth, loadingOff, loadingOn, setError } =
	authSlice.actions;

export const login =
	(dtoLogin: IloginDto) =>
	async (
		dispatch: (arg0: {
			payload: Iuser | string | undefined;
			type:
				| 'auth/setAuth'
				| 'auth/loadingOff'
				| 'auth/loadingOn'
				| 'auth/setError';
		}) => void
	) => {
		dispatch(loadingOn());
		try {
			const userCredentials = await signIn(dtoLogin);
			// @ts-expect-error
			setSession(userCredentials)(dispatch);
		} catch (error) {
			handleError()(dispatch);
		} finally {
			dispatch(loadingOff());
		}
	};

export const logout =
	() =>
	async (
		dispatch: (arg0: {
			payload: undefined;
			type: 'auth/clearAuth' | 'auth/loadingOff' | 'auth/loadingOn';
		}) => void
	) => {
		dispatch(loadingOn());

		await signOut();
		removeCookie(COOKIE_AUTH);
		dispatch(clearAuth());

		dispatch(loadingOff());
	};

const setSession =
	(userCredentials: unknown) =>
	(dispatch: (arg0: { payload: unknown; type: 'auth/setAuth' }) => void) => {
		setCookie(COOKIE_AUTH, userCredentials);
		// @ts-expect-error
		dispatch(setAuth(userCredentials));
	};

// eslint-disable-next-line n/handle-callback-err
const handleError =
	() =>
	(dispatch: (arg0: { payload: string; type: 'auth/setError' }) => void) => {
		dispatch(setError('credenciales incorrectas'));
		throw new Error('Credenciales incorrectas -_-');
	};

export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
