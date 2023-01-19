import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

@Injectable({
	providedIn: 'root'
})
export class ChartService {

	colorCode: Array<string> = ["#EA6A47", "#1C4E80", "#00ffff", "#AC3E31", "#B3C100", "#A5D8DD", "#DBAE58", "#488A99", "#484848", "#1F3F49", "#DADADA", "#6AB187", "#0091D5", "#CED2BC"];


	constructor () { }

	renderPieChart(id: string, types: any, data: any, labels: any) {
		const myChart = new Chart(id, {
			type: types,
			data: {
				labels: labels,
				datasets: [{
					data: data,
					backgroundColor: this.colorCode,
					borderColor: ["rgba(40,40,40)"],
					borderWidth: 1,
					lineWidth: 0,
					textStrokeWidth: 2
				}],
			}, options: {
				responsive: true,
				scales: {
					y: {
						beginAtZero: true,
						ticks: {
							display: false
						},
						grid: {
							display: false
						}
					},
					x: {
						beginAtZero: true,
						ticks: {
							display: false
						},
						grid: {
							display: false
						}
					},
				},
				plugins: {
					tooltip: {
						enabled: false
					},
					datalabels: {
						formatter: (value: any, ctx: any) => {
							let sum = 0;
							let dataArr = ctx.chart.data.datasets[0].data;
							dataArr.map((data: number) => {
								sum += data;
							});
							let percentage = (value * 100 / sum).toFixed(2) + "%";
							return percentage;
						},
						color: "#ffffff",
					}
				},
			},
		});
		return myChart;
	}

	destoryChart(chart: Chart) {
		if (chart != null || undefined) {
			chart.destroy();
		}
	}

}
