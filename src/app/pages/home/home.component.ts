import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/components/services/chart.service';
import { CotacaoService } from 'src/app/components/services/cotacao.service';
import { Cotacao } from './../../model/cotacao';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

	currencys: Array<string> = ["BTCBRL", "USDBRL", "EURBRL"]
	ids: any = [];
	cotacoes: Cotacao[] = [];
	bitcoin: any = []
	euro: any = []
	dollar: any = []

	constructor (private cotacao: CotacaoService, private chart: ChartService) { }

	ngAfterContentInit(): void {
		setTimeout(() => {
			this.createChart()
		}, 500)
	}

	ngOnInit(): void {
		this.cotacaoAtual();
		// this.cotacaoRefresh();
	}


	cotacaoAtual() {
		this.cotacao.getCotacao().subscribe((it) => {
			const json = JSON.parse(JSON.stringify(it));
			this.cotacoes.push(json.BTCBRL);
			this.cotacoes.push(json.EURBRL);
			this.cotacoes.push(json.USDBRL);
			this.cotacaoValues();
		});
	}

	cotacaoValues() {
		this.cotacoes.forEach((it: any) => {
			this.ids.push(it.code)
		})
		console.log(this.cotacoes)
	}
	cotacaoRefresh() {
		this.cotacoes = [];
		setInterval(() => {
			this.cotacaoAtual();
			window.location.reload();
		}, 30000);
	}

	createChart() {
		this.cotacoes.forEach(it => {
			this.chart.renderDonutChart(it.code, [it.code], [it.bid])
		})
	}

}
