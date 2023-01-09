import { firebaseConfig } from '@/config';
import { initializeApp } from 'firebase/app';

export const firebaseApp = initializeApp(firebaseConfig);
