import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
