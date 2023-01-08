/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Iuser } from '@/interfaces/auth';
import { signIn, signOut } from '@/services/auth';
import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
	user: Iuser;
	isAuthenticate: boolean;
}

const emptyState: IAuthState = {
	user: {
		email: '',
		uid: '0',
		displayName: '',
		phoneNumber: '',
		photoURL: '',
		accessToken: '',
	},
	isAuthenticate: false,
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
			state.user = emptyState.user;
			state.isAuthenticate = false;
		},
	},
});

export const { setAuth, clearAuth } = authSlice.actions;

// @ts-expect-error
export const login = (email: string, password: string) => dispatch => {
	signIn(email, password)
		.then(userCredential => {
			dispatch(setAuth(userCredential));
		})
		.catch(error => {
			throw new Error(error);
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
