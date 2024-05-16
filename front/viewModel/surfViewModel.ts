import SurfModel from "../model/surfModel";

class SurfViewModel {
	private model: SurfModel;
	

	constructor() {
		this.model = new SurfModel();
	
	}

	showData(): {records: {[key: string]: string}[]}[] {
		const data = this.model.getData().map((record) => ({
			records: record.records,
		}));
		
		return data;
	}
}

export default SurfViewModel;
