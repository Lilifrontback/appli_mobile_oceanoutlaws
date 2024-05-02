// HelloWorldView.ts
import HelloWorldModel from "../model/surfModel";

class HelloWorldView {
	displayMessage(message: string): void {
		console.log(`Message: ${message}`);
	}
}

export default HelloWorldView;
