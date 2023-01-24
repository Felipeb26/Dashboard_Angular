import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ConvertsService } from './converts.service';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

@Injectable({
	providedIn: 'root'
})
export class ChartService {

	colorCode: Array<string> = ["#488A99", "#EA6A47", "#1C4E80", "#00ffff", "#AC3E31", "#B3C100", "#A5D8DD", "#DBAE58", "#484848", "#1F3F49", "#DADADA", "#6AB187", "#0091D5", "#CED2BC"];

	reverseColorCode: Array<string> = [];

	dateLabel: Array<string> = [];

	constructor (private convert: ConvertsService) { }

	renderPieChart(tipo: string, types: any, data: any, labels: any) {
		const myChart = new Chart(tipo, {
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

	renderDonutChart(id: any, labels: any, data: any) {
		const myChart = new Chart(id, {
			type: "doughnut",
			data: {
				labels: labels,
				datasets: [{
					data: data,
					backgroundColor: this.colorCode,
					borderColor: ["rgba(40,40,40)"],
					borderWidth: 1,
				}],
			}, options: {
				responsive: false,
				maintainAspectRatio: false,
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
						color: "#ffffff",
					}
				},
			},
		});
	}

	renderBarChart(high: any, low: any, bid: any, labelDown: any) {
		high = high.reverse();
		low = low.reverse();
		bid = bid.reverse();

		labelDown.forEach((it: string) => {
			this.dateLabel.push(this.convert.toTimestamp(it));
		});
		console.log(this.dateLabel.length)

		this.dateLabel = this.dateLabel.reverse();
		const myChart = new Chart("time", {
			type: "line",
			data: {
				labels: this.dateLabel,
				datasets: [{
					label: "bid",
					data: bid,
					backgroundColor: [
						"rgba(90,90,50,0.2)"
					],
					borderColor: ["rgba(40,40,40)"],
				},
				{
					label: "high",
					data: high,
					backgroundColor: [
						"rgba(255, 26, 104, 0.2)"
					],
					borderColor: ["rgba(255,16,14)"],
					tension: 0.4,
					type: "line",
					order: 1
				},
				{
					label: "low",
					data: low,
					backgroundColor: [
						"rgba(255, 26, 104, 0.2)"
					],
					borderColor: ["rgba(255,16,14)"],
					tension: 0.4,
					type: "line",
					order: 2
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					x: {
						beginAtZero: true,
						stacked: true
					},
					y: {
						beginAtZero: true,
						stacked: true
					}
				}, plugins: {
					datalabels: {
						color: "black",
					}
				}, animations: {
					tension: {
						duration: 1000,
						easing: 'linear',
						from: 1,
						to: 0,
						loop: true
					}
				}
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
