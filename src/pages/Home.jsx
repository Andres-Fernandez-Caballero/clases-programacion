import axios from 'axios';
import { useEffect } from 'react';
import { config } from 'configs/config';
import { errorInterceptor } from 'interceptors/error';
import { updateHeaderInterceptor } from 'interceptors/updateHeader';

const Home = () => {
	const httpClient = axios.create({
		baseURL: config.externalUrls.pokeapi,
	});

	updateHeaderInterceptor(httpClient);
	errorInterceptor(httpClient);

	useEffect(() => {
		// @ts-ignore
		httpClient.get().then(response => console.log(response));
	}, []);

	return <div>Home</div>;
};

export default Home;
