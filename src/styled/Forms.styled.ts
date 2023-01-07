import { FormControl, styled } from '@mui/material';

export const FormControlCustom = styled(FormControl)(({ theme }) => ({
	margin: theme.spacing(1),
	minWidth: 120,
}));
