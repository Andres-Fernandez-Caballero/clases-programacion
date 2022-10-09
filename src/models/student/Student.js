import Entity from 'models/Entity';

class Student extends Entity {
	/**
	 * @param {string} firstName
	 * @param {string} lastName
	 * @param {string} bornDate
	 * @param {string} dni
	 */
	constructor(firstName, lastName, bornDate, dni) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.bornDate = bornDate;
		this.dni = dni;
	}
}

export default Student;
