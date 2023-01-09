import { configureStore } from '@reduxjs/toolkit';
import authSlyce from './slyces/auth.slyce';

export default configureStore({
	reducer: {
		auth: authSlyce,
	},
});
