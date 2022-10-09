import ProgramingLeanguage from 'models/programingLeanguage/ProgramingLeanguage';
import DaoFirebase from './DaoFirebase';

class DaoProgramingLeanguage extends DaoFirebase {
	constructor() {
		super(ProgramingLeanguage.name);
	}
}

export default DaoProgramingLeanguage;
