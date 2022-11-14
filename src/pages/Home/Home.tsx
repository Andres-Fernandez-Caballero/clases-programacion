import { AppConfig } from '../../config';

const Home: React.FunctionComponent = () => {
	return (
		<>
			<h1>Home</h1>
			<p>{AppConfig.appName}</p>
			<p>{AppConfig.appUrl}</p>
		</>
	);
};

export default Home;
