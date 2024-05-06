import Home from "../model/home";
import HomeView from "../view/homeView";

class HomefViewModel {
	private model: Home;


	constructor() {
		this.model = new Home();

	}

	showData(): {records: {[key: string]: string}[]}[] {
		const data = this.model.getPresentation().map((record) => ({
			records: record.records,
		}));
		
		return data;
	}
}

export default HomefViewModel;
