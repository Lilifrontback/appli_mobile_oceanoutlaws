//import data from "../model/donnees.json";

class SurfModel {
	
	private data: {records: {[key: string]: string}[]}[];

	constructor() {
		this.data = [];
	}

	getData(): {records: {[key: string]: string}[]}[] {
		return this.data;
	}
}

const fetchSecretData = () => {

	const URL = "http://127.0.0.1:3000/data";

	fetch(URL)
		.then((response) => response.json())
		.then((data) => {
			// Faire quelque chose avec les données, comme les stocker dans un état
			console.log(data);
		});
};
const data = fetchSecretData();


export default SurfModel;
