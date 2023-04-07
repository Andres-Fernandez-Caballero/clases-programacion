import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { programingLanguages } from '@constants/programingLanguages';
import { SelectProgramingLanguageProps } from '@pages/class/ClassCreate/ClassCreate.interface';
import { IProgramingLeanguajeFirebaseEntity } from '@interfaces/FirebaseEntitys';

export const SelectProgramingLanguage = ({
	onChangeSelector,
	programingLanguageSelected,
}: SelectProgramingLanguageProps) => (
	<Box>
		<FormControl fullWidth>
			<InputLabel id='leanguaje-select-label'>
				Lenguaje de Programacion
			</InputLabel>
			<Select
				labelId='leanguaje-select-label'
				label='Lenguaje de Programacion'
				id='leanguaje-select'
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				onChange={onChangeSelector}
				defaultValue={programingLanguageSelected.id}
			>
				{programingLanguages.map(
					(language: IProgramingLeanguajeFirebaseEntity) => (
						<MenuItem key={language.id} value={language.id}>
							{language.name}
						</MenuItem>
					)
				)}
			</Select>
		</FormControl>
	</Box>
);
