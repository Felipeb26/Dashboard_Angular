import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Injectable({
	providedIn: 'root'
})
export class ChartService {

	constructor () { }

	renderChart(id: string) {
		const myChart = new Chart(id, {
			type: "pie",
			data: {
				labels: ["t", "s"],
				datasets: [{
					label: "# vote",
					data: [10, 20],
					backgroundColor: ["rgba(10,150,250)"],
					borderColor: ["rgba(54,65,235)"],
					borderWidth: 1
				}]
			}, options: {
				responsive: true,
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		})
	}
}
