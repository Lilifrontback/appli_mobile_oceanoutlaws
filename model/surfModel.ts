// HelloWorldModel.ts
class HelloWorldModel {
	private message: string;

	constructor(message: string) {
		this.message = message;
	}

	getMessage(): string {
		return this.message;
	}
}

export default HelloWorldModel;
