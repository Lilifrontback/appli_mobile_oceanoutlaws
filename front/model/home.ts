class Home {
	private presentation: {records: {[key: string]: string}[]}[];

	constructor() {
		this.presentation = [
			{
				records: [
					{
						Welcome: "Welcome surfeurs",
						Photos:
							"./assets/surfer-1836366_640.png",
						
					},
					
				],
			},
		];
	}

	getPresentation(): {records: {[key: string]: string}[]}[] {
		return this.presentation;
	}
}
export default Home;