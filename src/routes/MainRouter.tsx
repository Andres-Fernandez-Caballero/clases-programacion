import { useSelector } from 'react-redux';
import { selectAuth } from '@/store/slyces/auth.slyce';
import PrivateRoutes from '@routes/private';
import PublicRoutes from '@routes/public';

const MainRouter = () => {
	const auth = useSelector(selectAuth);

	return <>{auth.isAuthenticate ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default MainRouter;
