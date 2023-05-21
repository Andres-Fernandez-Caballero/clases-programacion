import axios from 'axios';
import { zodiacConfig } from '@/config';
import { ZodiacSign } from '@interfaces/Domain';

const zodiacInterceptor = axios.create({
	baseURL: zodiacConfig.zodiacServiceUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getZodiac = async (date: string): Promise<ZodiacSign> =>
	(await zodiacInterceptor.get(`/zodiac?birthDate=${date}`)).data;

export const getZodiacSign = async (): Promise<ZodiacSign[]> =>
	(await zodiacInterceptor.get('/zodiac')).data;
