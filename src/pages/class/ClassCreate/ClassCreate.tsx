import Grid2 from '@mui/material/Unstable_Grid2/Grid2.js';
import FabSubmit from '@components/FabSubmit';
import FormLayout from '@components/layers/FormLayout';
import { useAppSelector } from '@store/hooks/hook';
import { selectStudents } from '@slyces/students.slice';
import { FC, ReactElement } from 'react';
import { ClassCreateProps } from '@pages/class/ClassCreate/ClassCreate.interface';
import { SelectStudent } from '@pages/class/ClassCreate/inputs/SelectStudent';
import { SelectProgramingLanguage } from '@pages/class/ClassCreate/inputs/SelectProgramingLanguage';
import { RangeHourSelector } from '@pages/class/ClassCreate/inputs/RangeHourSelector';
import { DatetimeInput } from '@pages/class/ClassCreate/inputs/DatetimeInput';

const COLUM_SMALL = 12;
const COLUM_MEDIUM = 6;

export const ClassCreate: FC<ClassCreateProps> = ({
	onSubmit,
	onChangeSelectorStudent,
	onChangeSelectorProgramingLanguage,
	programingLanguageSelected,
	onChangeSelectorDuration,
	onChangeSelectorDatetime,
	initDuration,
	maxDurationClass,
	durationStepRange,
	selectedDatetime,
}: ClassCreateProps): ReactElement => {
	const { students } = useAppSelector(selectStudents);

	return (
		<FormLayout>
			<form onSubmit={onSubmit}>
				<Grid2 container spacing={{ md: COLUM_MEDIUM }}>
					<Grid2 xs={COLUM_SMALL} md={COLUM_MEDIUM}>
						<SelectStudent
							students={students}
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-expect-error
							onChangeSelector={onChangeSelectorStudent}
						/>
					</Grid2>
					<Grid2 xs={COLUM_SMALL} md={COLUM_MEDIUM}>
						<SelectProgramingLanguage
							programingLanguageSelected={programingLanguageSelected}
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-expect-error
							onChangeSelector={onChangeSelectorProgramingLanguage}
						/>
					</Grid2>
					<Grid2 xs={COLUM_SMALL} md={COLUM_MEDIUM}>
						<RangeHourSelector
							rangeMax={maxDurationClass}
							onChange={onChangeSelectorDuration}
							step={durationStepRange}
							initValue={initDuration}
						/>
					</Grid2>
					<Grid2 xs={COLUM_SMALL} md={COLUM_MEDIUM}>
						<DatetimeInput
							onChange={onChangeSelectorDatetime}
							selectedDatetime={selectedDatetime}
						/>
					</Grid2>
					<FabSubmit />
				</Grid2>
			</form>
		</FormLayout>
	);
};
