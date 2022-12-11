/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import books from '../../../assets/books.jpg';
import { Item } from './styles/FormLayout.style';

export interface IFormLayoutProps {
	children?: React.ReactNode;
}

export const FormLayout: React.FunctionComponent<IFormLayoutProps> = ({
	children,
}: IFormLayoutProps) => {
	return (
		<Box sx={{ flexGrow: 0, padding: 1, height: '85vh' }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid sm={4} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
					<Item>
						<h2>Clases De Programacion</h2>
						<img
							src={books}
							alt='libros de diferentes colores apilados'
							height={200}
						/>
					</Item>
				</Grid>
				<Grid xs={12} sm={12} md={8} sx={{ height: '100%' }}>
					{children}
				</Grid>
			</Grid>
		</Box>
	);
};
