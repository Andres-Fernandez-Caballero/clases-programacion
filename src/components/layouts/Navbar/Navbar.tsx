import { ILink } from '../../../interfaces/ILink';

export interface NavbarProps {
	navLinks: ILink[];
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
	navLinks,
}: NavbarProps) => {
	return (
		<nav>
			Navbar
			<ul>
				{navLinks.map(link => (
					<li key={link.name}>
						<a href={link.url}>{link.name}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
