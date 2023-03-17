// axios interceptor for sending emails

import { EmailMessage } from '@/interfaces/emailSender.interface';
import axios from 'axios';
import { senderConfig } from '@/config';

const emailSender = axios.create({
	baseURL: senderConfig.emailSenderUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const sendEmail = async (emailMessage: EmailMessage) => {
	await emailSender.post('/email/send', emailMessage);
};
