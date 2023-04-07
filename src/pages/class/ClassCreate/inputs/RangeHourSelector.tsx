import RangeSelectorInput from '@components/RangeSelectorInput';
import { SelectDurationProps } from '@pages/class/ClassCreate/ClassCreate.interface';

export const RangeHourSelector = ({
	onChange,
	rangeMax,
	initValue,
	step,
}: SelectDurationProps) => {
	return (
		<RangeSelectorInput
			onChange={onChange}
			rangeMax={rangeMax}
			step={step}
			value={initValue}
		/>
	);
};
