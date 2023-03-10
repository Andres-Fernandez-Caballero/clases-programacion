import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ITicketFirebaseEntity } from '@interfaces/FirebaseEntitys';
import { TicketsTableProps } from '@components/Table/interfaces';
import { TicketTableHead } from '@components/Table/components/TicketTableHead';
import { TicketTabletBody } from '@components/Table/components/TicketTabletBody';
import { EmptyData } from '@components/Table/components/EmptyData';

export interface ClassTableProps {
	tickets: ITicketFirebaseEntity[];
	handlePaidTicket: (ticket: ITicketFirebaseEntity) => void;
}
export const DenseTable = ({ tickets }: TicketsTableProps) => {
	return (
		<>
			{tickets.length === 0 ? (
				<EmptyData />
			) : (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
						<TicketTableHead />
						<TicketTabletBody tickets={tickets} />
					</Table>
				</TableContainer>
			)}
		</>
	);
};
