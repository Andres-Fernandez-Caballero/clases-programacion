// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail';
import { senderConfig } from '@/config';
export const sendEmail = async (
	destination: string,
	subject: string,
	messageInHtmlFormat: string
) => {
	sgMail.setApiKey(senderConfig.sendgridApiKey);
	const msg = {
		to: destination, // Change to your recipient
		from: senderConfig.senderEmail, // Change to your verified sender
		subject,
		html: messageInHtmlFormat,
	};

	await sgMail.send(msg);
};
