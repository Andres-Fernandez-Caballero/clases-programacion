import {initializeApp} from 'firebase/app';
import {getAnalitics} from 'firebase/analytics';
import { config } from '../configs/config';

export const app = initializeApp(config.firebase);
export const analytics = getAnalitics(app);


