import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const TicketTableHead = () => (
	<TableHead>
		<TableRow>
			<TableCell>Alumno</TableCell>
			<TableCell align='right'>Fecha</TableCell>
			<TableCell align='right'>Lenguaje</TableCell>
			<TableCell align='right'>Cantidad&nbsp;(hs) </TableCell>
			<TableCell align='right'>Estado del Pago</TableCell>
		</TableRow>
	</TableHead>
);
