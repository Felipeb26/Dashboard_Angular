import { ChartService } from './../../components/service/chart.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

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
		valor: 8
	}
	]

	constructor (private chart:ChartService) { }

	ngOnInit(): void {
		this.chart.renderChart("piechart")
		this.setValue();
	}

	drop(event: CdkDragDrop<any[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
			this.setValue()
		}
	}

	setValue() {
		this.somaTodo = 0;
		this.somaFinale = 0;
		this.somaMadeit = 0;

		this.todo.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaTodo += data.valor;
		})
		this.madeit.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaMadeit += data.valor;
		})
		this.finale.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaFinale += data.valor;
		})
	}
}
