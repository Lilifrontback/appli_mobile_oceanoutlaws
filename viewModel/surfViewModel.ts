// HelloWorldViewModel.ts
import SurfModel from "../model/surfModel";
import SurfView from "../view/surfView";

class SurfViewModel {
	private model: SurfModel;
	private view: SurfView;

	constructor() {
		this.model = new SurfModel();
		this.view = new SurfView();
	}

	showData(): string | string[] {
		// Définir le type de retour comme string ou tableau de string
		const data = this.model.getData();
		this.view.displayData(data);
		return data; // Retourner les données récupérées du modèle
	}
}

export default SurfViewModel;
