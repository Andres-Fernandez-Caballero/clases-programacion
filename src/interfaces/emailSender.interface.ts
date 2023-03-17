export interface EmailMessage {
	addressed: string;
	subject: string;
	messageInHtmlFormat: string;
}

export interface EmailSenderResponse {
	message: string;
	statusCode: number;
}
