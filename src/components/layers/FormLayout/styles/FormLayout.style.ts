import { FormControl, Paper, styled } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export const FormControlCustom = styled(FormControl)(({ theme }) => ({
	margin: theme.spacing(1),
	minWidth: 120,
}));
