import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu.js';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useToggle } from '@components/layouts/Navbar/hooks/toggleButtonNav.js';
import { NavigationLinkProps } from '@components/layouts/Navbar/interfaces';

export const ExpandView = ({
	navLinks,
	handleOpenPage,
}: NavigationLinkProps) => {
	const anchorNav = useToggle();

	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={event => {
					anchorNav.toggleOpen(event.target);
				}}
				color='inherit'
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorNav.state}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorNav.state)}
				onClose={anchorNav.toggleClose}
				sx={{
					display: { xs: 'block', md: 'none' },
				}}
			>
				{navLinks.map(page => (
					<MenuItem
						key={page.name}
						onClick={() => {
							handleOpenPage(page.url);
						}}
					>
						<Typography textAlign='center'>{page.name}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};
