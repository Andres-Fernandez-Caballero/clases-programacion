import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';

export interface RangeSelectorInputProps {
	onChange: (event: Event, newValue: number | number[]) => void;
	rangeMax: number;
	step: number;
	value: number;
}

export const RangeSelectorInput: React.FC<RangeSelectorInputProps> = ({
	onChange,
	rangeMax = 10,
	step = 1,
	value = 1,
}: RangeSelectorInputProps) => {
	const marks = [];
	let displaylabel = false;
	for (let index = 0; index <= rangeMax; index += step) {
		const mark = {
			value: index,
			label: displaylabel ? '' : index.toString() + 'h',
		};
		displaylabel = !displaylabel;
		marks.push(mark);
	}
	return (
		<Box sx={{ paddingX: 4 }}>
			<label>Duracion de la clase</label>
			<Slider
				onChange={onChange}
				aria-label='Always visible'
				max={rangeMax}
				step={step}
				marks={marks}
				defaultValue={value}
				valueLabelDisplay='on'
			/>
		</Box>
	);
};
