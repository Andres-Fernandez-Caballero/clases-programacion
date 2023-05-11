import React from 'react';
import { IStudentTableProps } from './GenericTable.interfaces';
import { EmptyData } from '@components/Table/components/EmptyData';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import {
	DataGrid,
	GridActionsCellItem,
	GridColDef,
	GridRowParams,
} from '@mui/x-data-grid';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@store/hooks/hook';
import { deleteStudent } from '@slyces/students.slice';

export const StudentTable: React.FC<IStudentTableProps> = ({
	items,
}: IStudentTableProps): React.ReactElement => {
	const dispatch = useAppDispatch();

	const columns: GridColDef[] = [
		{
			field: 'firstName',
			headerName: 'Nombre',
			type: 'string',
			sortable: true,
			flex: 0.5,
		},
		{
			field: 'lastName',
			headerName: 'Apellido',
			type: 'string',
			sortable: true,
			flex: 0.5,
		},
		{
			field: 'dni',
			headerName: 'dni',
			type: 'string',
			flex: 0.3,
		},
		{
			field: 'actions',
			type: 'actions',
			headerName: 'Acciones',
			description: 'This column has a actions and is not sortable.',
			sortable: false,
			flex: 1,
			getActions: (params: GridRowParams) => {
				return [
					<GridActionsCellItem
						key={params.id}
						icon={<MailIcon color={'info'} />}
						onClick={() => {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							window.open(
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								`mailto:${params.row.email}`,
								'_blank',
								'noopener noreferrer'
							);
						}}
						label='Email'
					/>,

					<GridActionsCellItem
						key={params.id}
						icon={<WhatsAppIcon color='success' />}
						onClick={() => {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							window.open(
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								`https://wa.me/${params.row.phone}`,
								'_blank',
								'noopener noreferrer'
							);
						}}
						label='WhatsApp'
					/>,
					<GridActionsCellItem
						label={'Editar'}
						key={params.id}
						icon={<EditIcon color='warning' />}
						onClick={() => {
							alert('Caracteristica en desarrollo 🚧');
						}}
					/>,
					<GridActionsCellItem
						label={'Eliminar'}
						key={params.id}
						icon={<DeleteIcon color='error' />}
						onClick={() => {
							const result = confirm(
								'¿Estas seguro que deseas eliminar este estudiante?'
							);
							if (result) {
								const message = toast.loading('Eliminando estudiante...');
								dispatch(deleteStudent(params.row.id))
									.then(() => {
										toast.update(message, {
											render: 'Estudiante eliminado con exito',
											type: 'success',
											autoClose: 3000,
											isLoading: false,
											closeButton: true,
										});
									})
									.catch(error => {
										console.error(error);
										toast.update(message, {
											render: 'Error al eliminar estudiante',
											type: 'error',
											autoClose: 3000,
											isLoading: false,
											closeButton: true,
										});
									});
							}
						}}
					/>,
				];
			},
		},
	];

	const rows = items.map(item => ({
		id: item.id,
		firstName: item.firstName,
		lastName: item.lastName,
		dni: item.dni,
		email: item.email,
		phone: item.phone,
	}));

	return (
		<>
			{items.length === 0 ? (
				<EmptyData />
			) : (
				<div style={{ margin: '32px' }}>
					<DataGrid
						columns={columns}
						rows={rows}
						autoHeight={true}
						loading={false}
					/>
				</div>
			)}
		</>
	);
};
