// surfView.ts
class SurfView {
	displayData(data: {records: {[key: string]: string}[]}[]): void {
		data.forEach((item, index) => {
			console.log(`Item ${index + 1}:`);
			item.records.forEach((record) => {
				Object.entries(record).forEach(([key, value]) => {
					console.log(`${key}: ${value}`);
				});
				console.log(""); // Ajouter une ligne vide entre chaque enregistrement
			});
		});
	}
}

export default SurfView;
