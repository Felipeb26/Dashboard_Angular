import { Component, Input, OnChanges } from '@angular/core';
import { ChartService } from 'src/app/components/services/chart.service';
import { ConvertsService } from 'src/app/components/services/converts.service';
import { CotacaoRequestService } from 'src/app/components/services/cotacao-request.service';
import { Cotacao } from './../../../components/models/cotacao';

@Component({
	selector: 'app-currency',
	templateUrl: './currency.component.html',
	styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnChanges {
	@Input("name") cota: string = "";

	charts: any;
	currency: string = "";

	highA: Array<Number> = [];
	lowA: Array<Number> = [];
	bidA: Array<Number> = [];
	labelDown: Array<any> = [];

	constructor (
		private cotacaoService: CotacaoRequestService,
		private convert: ConvertsService,
		private chart: ChartService) { }


	ngOnChanges(): void {

		this.makeRequest();
		this.createChart();
	}

	makeRequest() {

		console.log(this.labelDown.length)
		this.cota = this.cota.replace("BRL", "-BRL");
		this.cotacaoService.getFechamentoPorDias(this.cota, 15).subscribe((it: Cotacao[]) => {
			this.resetValues();
			it.forEach(cot => {
				this.highA.push(Number(cot.high));
				this.lowA.push(Number(cot.low));
				this.bidA.push(Number(cot.bid));
				this.labelDown.push(cot.timestamp);
			});
			this.currency = it[0].name;
		});
	}

	createChart() {
		this.chart.destoryChart(this.charts);
		setTimeout(() =>{
			this.charts = this.chart.renderBarChart(this.highA, this.lowA, this.bidA, this.labelDown);
		},500);
	}

	resetValues(){
		this.labelDown = [];
		this.highA = [];
		this.lowA = [];
		this.bidA = [];
	}

}
