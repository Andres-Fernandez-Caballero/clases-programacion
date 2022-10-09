// eslint-disable-next-line no-unused-vars
import Entity from 'models/Entity';
import ErrorInterfazMethodNotImplemented from 'models/Errors/ErrorInterfazMethodNotImplemented';

class IDao {
	/**
	 * @param {Entity} entity
	 */
	create(entity) {
		throw new ErrorInterfazMethodNotImplemented();
	}

	/**
	 * @param {string} id
	 * @param {Entity} entity
	 */
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
