import ErrorInterfazMethodNotImplemented from './Errors/ErrorInterfazMethodNotImplemented';

class Entity {
	constructor() {
		this.id = '';
	}

	toString() {
		return Object.toString();
	}

	/**
	 *
	 * @returns {{}}
	 */
	toJson() {
		throw new ErrorInterfazMethodNotImplemented();
	}

	/**
	 * @param {Entity} entity
	 */
	jsonToObject(entity) {
		throw new ErrorInterfazMethodNotImplemented();
	}

	/**
	 * @returns {string}
	 */
	className() {
		throw new ErrorInterfazMethodNotImplemented();
	}
}

export default Entity;
