import ErrorInterfazMethodNotImplemented from 'models/Errors/ErrorInterfazMethodNotImplemented';

class IDao {
	create(entity) {
		throw new ErrorInterfazMethodNotImplemented();
	}

	update(id = '', entity) {
		throw new ErrorInterfazMethodNotImplemented();
	}

	list() {
		throw new ErrorInterfazMethodNotImplemented();
	}

	detail(id = '') {
		throw new ErrorInterfazMethodNotImplemented();
	}

	remove(id = '') {
		throw new ErrorInterfazMethodNotImplemented();
	}
}

export default IDao;
