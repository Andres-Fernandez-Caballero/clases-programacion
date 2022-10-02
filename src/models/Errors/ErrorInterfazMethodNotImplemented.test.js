import ErrorInterfazMethodNotImplemented from './ErrorInterfazMethodNotImplemented';

describe('ErrorInterfazMethodNotImplement unit tests', () => {
	test('Should throw a correct error message', () => {
		const myErrorFunction = () => {
			throw new ErrorInterfazMethodNotImplemented();
		};
		expect(myErrorFunction).toThrowError('Method not implemented');
	});
});
