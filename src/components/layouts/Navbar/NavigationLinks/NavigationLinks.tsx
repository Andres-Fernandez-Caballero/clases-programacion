import { ExpandView } from '@components/layouts/Navbar/NavigationLinks/ExpandView.jsx';
import { CompactView } from '@components/layouts/Navbar/NavigationLinks/CompactView.jsx';
import { useNavigate } from 'react-router-dom';
import {
	NavigationProps,
	NavigationLinkProps,
} from '@components/layouts/Navbar/interfaces';

const View = (props: NavigationLinkProps) => (
	<>
		<ExpandView {...props} />
		<CompactView {...props} />
	</>
);
export const Instance = ({ navLinks }: NavigationProps) => {
	const navigate = useNavigate();
	const handleOpenPage = (url: string) => {
		navigate(url);
	};

	const props: NavigationLinkProps = {
		handleOpenPage,
		navLinks,
	};
	return <View {...props} />;
};
