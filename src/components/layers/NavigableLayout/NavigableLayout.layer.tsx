import React from 'react';
import { ILink } from '../../../interfaces/ILink';
import Footer from '../../layouts/Footer';
import Navbar from '../../layouts/Navbar';

export interface NavigableLayoutProps {
	navBarLinks: ILink[];
	children?: React.ReactNode;
}

const NavigableLayour: React.FunctionComponent<NavigableLayoutProps> = ({
	navBarLinks,
	children,
}: NavigableLayoutProps) => {
	return (
		<>
			<Navbar navLinks={navBarLinks} />
			{children}
			<Footer />
		</>
	);
};

export default NavigableLayour;
