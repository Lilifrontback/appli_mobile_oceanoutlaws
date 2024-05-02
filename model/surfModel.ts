// surfModel.ts
class SurfModel {
	private data: string[];

	constructor() {
		this.data = [
			"Reef Break",
			"https://dl.airtable.com/ZuXJZ2NnTF40kCdBfTld_thomas-ashlock-64485-unsplash.jpg",
			"Pipeline, Oahu, Hawaii",
		];
	}

	getData(): string[] {
		return this.data;
	}
}

export default SurfModel;
