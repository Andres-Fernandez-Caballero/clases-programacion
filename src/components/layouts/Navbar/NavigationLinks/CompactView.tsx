import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavigationLinkProps } from '@components/layouts/Navbar/interfaces';

export const CompactView = ({
	navLinks,
	handleOpenPage,
}: NavigationLinkProps) => {
	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
			{navLinks.map(page => (
				<Button
					data-testid={page.name}
					key={page.name}
					onClick={() => handleOpenPage(page.url)}
					sx={{ my: 2, color: 'white', display: 'block' }}
				>
					{page.name}
				</Button>
			))}
		</Box>
	);
};
