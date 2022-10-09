import Entity from 'models/Entity';

class ProgramingLeanguage extends Entity {
	constructor(name, image) {
		super();
		this.name = name;
		this.image = image;
	}

	toJson() {
		return {
			name: this.name,
			image: this.image,
		};
	}

	className() {
		return 'ProgramingLeanguage';
	}
}

export default ProgramingLeanguage;
