import { Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface FabButtonProps {
	to?: string;
	onClick?: () => void;
	children?: React.ReactNode;
}

const FabButton = ({
	to,
	onClick,
	children,
}: FabButtonProps): React.ReactElement => {
	const navigate = useNavigate();
	return (
		<aside
			style={{
				position: 'fixed',
				bottom: '2rem',
				right: '2rem',
			}}
		>
			<Fab
				color='primary'
				onClick={() => {
					if (to !== undefined) return navigate(to);
					if (onClick !== undefined) return onClick();
				}}
			>
				{children !== undefined ? children : <></>}
			</Fab>
		</aside>
	);
};

export default FabButton;
