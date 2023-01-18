import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Injectable({
	providedIn: 'root'
})
export class ChartService {

	constructor () { }

	renderChart(id: string, types: any, data: any, labels: any) {
		const myChart = new Chart(id, {
			type: types,
			data: {
				labels: labels,
				datasets: [{
					label: "# vote",
					data: data,
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
		});
		return myChart;
	}

	destoryChart(chart: Chart) {
		if (chart != null || undefined) {
			chart.destroy();
		}
	}
}
