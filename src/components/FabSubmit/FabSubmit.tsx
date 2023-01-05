import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab } from '@mui/material';

export interface FabSubmitProps {
	text?: string;
}

export const FabSubmit = ({ text = 'guardar' }: FabSubmitProps) => (
	<Fab
		variant='extended'
		type='submit'
		color='primary'
		sx={{ position: 'absolute', bottom: 36, right: 36 }}
	>
		<NavigationIcon sx={{ mr: 1 }} />
		{text}
	</Fab>
);
