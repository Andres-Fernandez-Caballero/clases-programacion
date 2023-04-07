import { TextField } from '@mui/material';
import { FormControlCustom } from '@styled/Forms.styled';
import { SelectorDatetimeProps } from '@pages/class/ClassCreate/ClassCreate.interface';

export const DatetimeInput = ({
	onChange,
	selectedDatetime,
}: SelectorDatetimeProps) => {
	return (
		<FormControlCustom fullWidth>
			<TextField
				id='date'
				label='Fecha de la clase'
				name='dateTime'
				type='datetime-local'
				onChange={onChange}
				value={selectedDatetime}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</FormControlCustom>
	);
};
