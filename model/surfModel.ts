import data from "../model/donnees.json";

class SurfModel {
	private data: {records: {[key: string]: string}[]}[];

	constructor() {
		this.data = data;
	}

	getData(): {records: {[key: string]: string}[]}[] {
		return this.data;
	}
}

// const fetchSecretData = () => {
// 	var Airtable = require('airtable');
// 	const URL = "https://api.airtable.com/appeBLUw8pgjmPH2p";
// 	const headers = {
// 		Authorization:
// 			"patjZg51npK60I1pt.3774c16233e4f3bba19dbd7539c9bc3d82bc3ca8124d89b125775aae917844ff",
// 	};
// 	fetch(URL, {headers})
// 		.then((response) => response.json())
// 		.then((data) => {
// 			// Faire quelque chose avec les données, comme les stocker dans un état
// 			console.log(data);
// 		});
// };

// fetchSecretData();

export default SurfModel;
