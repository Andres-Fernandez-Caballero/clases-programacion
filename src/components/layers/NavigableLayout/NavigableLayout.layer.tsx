import React from 'react';
import { Outlet } from 'react-router-dom';
import { ILink } from '@interfaces/ILink';
import Footer from '@components/layouts/Footer';
import Navbar from '@components/layouts/Navbar';

export interface NavigableLayoutProps {
	navBarLinks: ILink[];
}

const NavigableLayour: React.FunctionComponent<NavigableLayoutProps> = ({
	navBarLinks,
}: NavigableLayoutProps) => {
	return (
		<>
			<Navbar navLinks={navBarLinks} />
			<Outlet />
			<Footer />
		</>
	);
};

export default NavigableLayour;
