import { ConvertsService } from 'src/app/components/services/converts.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/components/services/chart.service';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

	todoA: string = "";

	chartT: any;
	chartM: any;
	chartF: any;

	todoValues: any = [];
	madeitValues: any = [];
	finaleValues: any = [];

	todoKey: any = [];
	madeitKey: any = [];
	finaleKey: any = [];

	somaTodo: Number = 0;
	somaMadeit: Number = 0;
	somaFinale: Number = 0;

	todo: Array<any> = [{
		comida: "lazanha",
		valor: 10
	}, {
		comida: "macarrao",
		valor: 9
	}, {
		comida: "bolo",
		valor: 8
	}
	]

	madeit: Array<any> = [{
		comida: "arroz",
		valor: 10
	}, {
		comida: "pamonha",
		valor: 9
	}, {
		comida: "feijao",
		valor: 8
	}
	]

	finale: Array<any> = [{
		comida: "arroz doce",
		valor: 10
	}, {
		comida: "coxinha",
		valor: 9
	}, {
		comida: "lazanha de bolonhesa",
		valor: 15
	}
	]

	constructor (private chart: ChartService,
		private convert: ConvertsService) { }

	ngOnInit(): void {
		this.setValue();
		this.createCharts();
	}

	drop(event: CdkDragDrop<any[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
			this.setValue()
			this.createCharts();
		}
	}

	setValue() {
		this.somaTodo = 0;
		this.somaMadeit = 0;
		this.somaFinale = 0;

		this.todoValues = [];
		this.madeitValues = [];
		this.finaleValues = [];

		this.todoKey = [];
		this.madeitKey = [];
		this.finaleKey = [];

		this.convert.getValueFromArray(this.todo, this.todoValues, this.todoKey);
		this.convert.getValueFromArray(this.madeit, this.madeitValues, this.madeitKey);
		this.convert.getValueFromArray(this.finale, this.finaleValues, this.finaleKey);

		this.todo.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaTodo += data.valor;
		});

		this.madeit.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaMadeit += data.valor;
		});

		this.finale.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaFinale += data.valor;
		});
	}

	createCharts() {
		this.chart.destoryChart(this.chartT);
		this.chart.destoryChart(this.chartM);
		this.chart.destoryChart(this.chartF);
		this.chartT = this.chart.renderPieChart("piechart", "pie", this.todoValues, this.todoKey);
		this.chartM = this.chart.renderPieChart("madeits", "pie", this.madeitValues, this.madeitKey);
		this.chartF = this.chart.renderPieChart("finales", "pie", this.finaleValues, this.finaleKey);
	}

	addValue() {
		const value = this.todoA.split(";");
		const obj = {
			comida: value[0],
			valor: Number(value[1])
		}
		this.todo.push(obj);
		this.setValue()
		this.createCharts()
		console.log(this.todoA)
	}
}
