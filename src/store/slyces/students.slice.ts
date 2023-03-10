import { IStudentFirebaseEntity } from '@interfaces/FirebaseEntitys';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncState, IStateWhitError } from '@store/interfaces/state';
import { RootState } from '@/store';
import StudentService from '@services/FirebaseServices/entityServices/StudentService';

export interface IStudentState extends IAsyncState, IStateWhitError {
	students: IStudentFirebaseEntity[];
}

export const studentSlice = createSlice({
	name: 'student',
	initialState: {
		students: [] as IStudentFirebaseEntity[],
		loading: false,
		error: null,
	},
	reducers: {
		setStudents: (state, action: PayloadAction<IStudentFirebaseEntity[]>) => {
			state.students = action.payload;
		},
		loadingOff(state) {
			state.loading = false;
		},
		loadingOn(state) {
			state.loading = true;
		},
	},
});

const { setStudents, loadingOn, loadingOff } = studentSlice.actions;

export const getStudents =
	() =>
	async (dispatch: (arg0: { payload: unknown; type: string }) => void) => {
		dispatch(loadingOn());
		try {
			const service = new StudentService();
			const students = await service.getAll();
			dispatch(setStudents(students));
		} finally {
			dispatch(loadingOff());
		}
	};

export const addStudent =
	(student: IStudentFirebaseEntity) =>
	async (
		dispatch: (
			arg0: (
				dispatch: (arg0: { payload: unknown; type: string }) => void
			) => Promise<void>
		) => void
	) => {
		const service = new StudentService();
		await service.create(student);
		dispatch(getStudents());
	};
export const selectStudents = (state: RootState) => state.students;

export default studentSlice.reducer;
