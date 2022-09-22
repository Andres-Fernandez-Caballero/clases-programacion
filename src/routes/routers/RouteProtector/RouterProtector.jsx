import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteProtecor = ({ isAllowed = true, redirectTo = '/', children }) => {
	// when is not allowed, redirect to the redirectTo path
	if (!isAllowed) return <Navigate to={redirectTo} />;

	return children || <Outlet />;
};

RouteProtecor.propTypes = {
	name: PropTypes.string.isRequired,
};

RouteProtecor.propTypes = {
	isAllowed: PropTypes.bool,
	redirectTo: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default RouteProtecor;
