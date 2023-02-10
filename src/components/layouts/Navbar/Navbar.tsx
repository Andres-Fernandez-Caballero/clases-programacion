import { ILink } from '@interfaces/ILink';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AppConfig } from '@config/index';
import owl from '@assets/owl.svg';
import { useAppSelector } from '@/store/hooks/hook';
import { selectAuth } from '@/store/slyces/auth.slyce';
import { useToggle } from './hooks/toggleButtonNav';
import NavigationLinks from './NavigationLinks/';

export interface NavbarProps {
	navLinks: ILink[];
}

export const NavBar: React.FC<NavbarProps> = ({ navLinks }: NavbarProps) => {
	const auth = useAppSelector(selectAuth);
	const anchorUser = useToggle();

	const userSettingsLinks = ['Profile', 'Account', 'Dashboard', 'Logout'];

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						<img src={owl} height='50' width='50' />
						{AppConfig.appName}
					</Typography>

					<NavigationLinks navLinks={navLinks} />

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								onClick={event => {
									anchorUser.toggleOpen(event.target);
								}}
								sx={{ p: 0 }}
							>
								<Avatar
									alt='Remy Sharp'
									src={
										auth.user?.photoURL != null
											? auth.user?.photoURL
											: 'https://www.ringtina.com.ar/Descargar/Fondos%20de%20Pantalla/Animales/ImgAnimales%20051.jpg'
									}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorUser.state}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorUser.state)}
							onClose={anchorUser.toggleClose}
						>
							{userSettingsLinks.map(setting => (
								<MenuItem key={setting} onClick={anchorUser.toggleClose}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
