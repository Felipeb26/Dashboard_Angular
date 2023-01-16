import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

	soma: any

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

	constructor () { }

	ngOnInit(): void {
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
			event.container.data.map(it => {
				for (var i = 0; i < event.container.data.length; i++) {
					var data: string = event.container.data[i].toString();
					this.soma += data.substring(data.indexOf(":") + 1, data.length)
				};
			})
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
		}
		console.table(this.soma)
		console.log(this.todo)
	}

	setValue() {

	}
}
