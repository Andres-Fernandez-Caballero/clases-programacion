/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_APP_NAME: string;

	VITE_APP_FIREBASE_API_KEY: string;
	VITE_APP_FIREBASE_AUTH_DOMAIN: string;
	VITE_APP_FIREBASE_PROJECT_ID: string;
	VITE_APP_FIREBASE_SORAGE_BUCKET: string;
	VITE_APP_FIREBASE_MESSAGIN_SENDER_ID: string;
	VITE_APP_FIREBASE_APP_ID: string;
	VITE_APP_FIREBASE_MEASUREMENT_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
