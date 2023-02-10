import { ILink } from '@interfaces/ILink';

export interface NavigationLinkProps {
	navLinks: ILink[];
	handleOpenPage: (url: string) => void;
}

export interface NavigationProps {
	navLinks: ILink[];
}
