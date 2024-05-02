// HelloWorldViewModel.ts
import HelloWorldModel from "../model/surfModel";
import HelloWorldView from "../view/surfView";

class HelloWorldViewModel {
	private model: HelloWorldModel;
	private view: HelloWorldView;

	constructor() {
		this.model = new HelloWorldModel("Hello, World!");
		this.view = new HelloWorldView();
	}

	showMessage(): void {
		const message = this.model.getMessage();
		this.view.displayMessage(message);
	}
}

export default HelloWorldViewModel;
