import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { config } from '../configs/config';

export const app = initializeApp(config.firebase);
export const analytics = getAnalytics(app);
