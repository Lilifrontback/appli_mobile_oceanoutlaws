import SurfModel from "../model/surfModel";
import SurfView from "../view/surfView";

class SurfViewModel {
	private model: SurfModel;
	private view: SurfView;

	constructor() {
		this.model = new SurfModel();
		this.view = new SurfView();
	}

	showData(): {records: {[key: string]: string}[]}[] {
		const data = this.model.getData().map((record) => ({
			records: record.records,
		}));
		this.view.displayData(data);
		return data;
	}
}

export default SurfViewModel;
