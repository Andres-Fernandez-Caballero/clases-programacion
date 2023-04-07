import Grid2 from '@mui/material/Unstable_Grid2';
import { Button, TextField } from '@mui/material';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { ChangeEvent } from 'react';

export interface InputAmountProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	pricePerHour: number;
}

export const InputAmount = ({ pricePerHour, onChange }: InputAmountProps) => {
	return (
		<Grid2
			container
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '8px',
			}}
		>
			<Grid2 xs={12} md={5}>
				<TextField
					id='price'
					label='Valor de la clase'
					name='price'
					type='number'
					onChange={onChange}
					value={pricePerHour}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid2>
			<Grid2 xs={12} md={5}>
				<Button
					variant='outlined'
					size='small'
					onClick={() => {
						// handleOnPriceOff(10);
					}}
				>
					<MoneyOffIcon /> -10%
				</Button>
			</Grid2>
		</Grid2>
	);
};
