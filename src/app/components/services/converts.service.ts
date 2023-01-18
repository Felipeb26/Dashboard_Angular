import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ConvertsService {


	constructor () { }

	addIntoAnArray(array: any, value: any) {
		array.push(value);
		return array;
	}

	getValueFromArray(data: Array<any>, value: Array<any>, keys:Array<any>) {
		data.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			value.push(data.valor);
			keys.push(data.comida);
		});
	}

	resetValues(value:any){
		if(value instanceof Array){
			return value = [];
		}
		if(value instanceof String){
			return value = "";
		}
		if(value instanceof Number){
			return value = 0;
		}
		return;
	}
}
