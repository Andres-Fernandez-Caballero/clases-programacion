import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const TicketTableHead = () => (
	<TableHead sx={{ padding: '8x', backgroundColor: '#eaeaea' }}>
		<TableRow>
			<TableCell>Alumno</TableCell>
			<TableCell align='center'>Fecha</TableCell>
			<TableCell align='center'>Cantidad&nbsp;(hs) </TableCell>
			<TableCell align='center'>Monto</TableCell>
			<TableCell align='center'>Acciones</TableCell>
		</TableRow>
	</TableHead>
);
