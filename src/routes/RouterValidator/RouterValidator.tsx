import { Outlet, useNavigate } from 'react-router-dom';

export interface RouterValidatorProps {
	rule: boolean;
	redirectPath: string;
}

export const RouterValidator = ({
	rule,
	redirectPath,
}: RouterValidatorProps) => {
	const navigate = useNavigate();
	if (!rule) navigate(redirectPath, { replace: true });
	return <Outlet />;
};
