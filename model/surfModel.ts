class SurfModel {
	private data: {records: {[key: string]: string}[]}[];

	constructor() {
		this.data = [
			{
				records: [
					{
						"Surf Break": "Reef Break",
						Photos:
							"https://www.voyageursdumonde.fr/voyage-sur-mesure/magazine-voyage/ShowPhoto/1490/0",
						Address: "Pipeline, Oahu, Hawaii",
					},
					{
						"Surf Break": "Point Break",
						Photos:
							"https://www.voyageursdumonde.fr/voyage-sur-mesure/magazine-voyage/ShowPhoto/1490/0",
						Address: "Supertubes, Jeffreys Bay, South Africa",
					},
				],
			},
		];
	}

	getData(): {records: {[key: string]: string}[]}[] {
		return this.data;
	}
}

export default SurfModel;
