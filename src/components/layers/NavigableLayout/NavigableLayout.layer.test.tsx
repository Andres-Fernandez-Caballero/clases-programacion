import { cleanup, render } from '@testing-library/react';
import NavigableLayout, { NavigableLayoutProps } from './NavigableLayout.layer';

describe('NavigableLayour', () => {
	afterEach(cleanup);
	const defaultProps: NavigableLayoutProps = {
		navBarLinks: [
			{ name: 'Home', url: '/' },
			{ name: 'About', url: '/about' },
		],
	};

	it('should render', () => {
		const props = { ...defaultProps };
		const { asFragment, queryByText } = render(
			<NavigableLayout {...props}>
				<div>Test</div>
			</NavigableLayout>
		);

		expect(asFragment()).toMatchSnapshot();
		props.navBarLinks.forEach(link => {
			// expect(queryByText(link.name)).toBeTruthy();
		});
		expect(queryByText('Test')).toBeTruthy();
		expect(queryByText('Footer')).toBeTruthy();
	});
});
