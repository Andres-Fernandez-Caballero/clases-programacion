import Grid2 from '@mui/material/Unstable_Grid2/Grid2.js';
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import { IStudentFirebaseEntity } from '@interfaces/FirebaseEntitys.js';
import { programingLanguages } from '@constants/programingLanguages.js';
import { IProgramingLeanguaje } from '@interfaces/Domain.js';
import RangeSelectorInput from '@components/RangeSelectorInput/index.js';
import { FormControlCustom } from '@styled/Forms.styled.js';
import FabSubmit from '@components/FabSubmit/index.js';
import FormLayout from '@components/layers/FormLayout/index.js';
import { useAppSelector } from '@store/hooks/hook.js';
import { selectStudents } from '@slyces/students.slice.js';

export const ClassCreate = () => {
	const { students } = useAppSelector(selectStudents);

	return (
		<FormLayout>
			<form
				onSubmit={() => {
					/* do something */
				}}
			>
				<Grid2 container spacing={{ md: 10 }}>
					<Grid2 xs={12} md={6}>
						<Box>
							<FormControl fullWidth>
								<InputLabel id='alumno-select-label'>Alumno</InputLabel>
								<Select
									labelId='alumno-select-label'
									id='alumno-select'
									label='Alumno'
									onChange={() => {
										/* do something */
									}}
								>
									{students.map((student: IStudentFirebaseEntity) => (
										<MenuItem key={student.id} value={student.dni}>
											{`${student.firstName} ${student.lastName} DNI: ${student.dni}`}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
					</Grid2>
					<Grid2 xs={12} md={6}>
						<Box>
							<FormControl fullWidth>
								<InputLabel id='leanguaje-select-label'>
									Lenguaje de Programacion
								</InputLabel>
								<Select
									labelId='leanguaje-select-label'
									label='Lenguaje de Programacion'
									id='leanguaje-select'
									onChange={() => {
										/* do something */
									}}
								>
									{programingLanguages.map((language: IProgramingLeanguaje) => (
										<MenuItem key={language.name} value={language.name}>
											{language.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
					</Grid2>
					<Grid2 xs={12} md={6}>
						<RangeSelectorInput
							onChange={() => {
								/* do something */
							}}
							rangeMax={5}
							step={0.5}
							value={1}
						/>
					</Grid2>
					<Grid2 xs={12} md={6}>
						<FormControlCustom fullWidth>
							<TextField
								id='date'
								label='Fecha de la clase'
								name='dateTime'
								type='datetime-local'
								onChange={() => {
									/* do something */
								}}
								value={'2023-12-31T10:30'}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</FormControlCustom>
					</Grid2>
					<FabSubmit />
				</Grid2>
			</form>
		</FormLayout>
	);
};
