import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/components/services/chart.service';
import { CotacaoRequestService } from 'src/app/components/services/cotacao-request.service';
import { Cotacao } from './../../components/models/cotacao';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	ids: any = [];
	cotacoes: Cotacao[] = [];
	bitcoin: any = []
	euro: any = []
	dollar: any = []
	nome: string = "BTCBRL"


	constructor (
		private chart: ChartService,
		private cotacaoService: CotacaoRequestService) { }

	ngOnInit(): void {
		this.getCurrency();
		setTimeout(() => {
			console.log(this.cotacoes);
		}, 500);
	}


	getCurrency() {
		this.cotacaoService.getAllCurrencys().subscribe((it) => {
			console.log(it)
			const json = JSON.parse(JSON.stringify(it));
			this.cotacoes.push(json.BTCBRL);
			this.cotacoes.push(json.EURBRL);
			this.cotacoes.push(json.USDBRL);

			this.chart.renderDonutChart("EUR", [json.EURBRL.code], [json.EURBRL.bid]);
			this.chart.renderDonutChart("BTC", [json.BTCBRL.code], [json.BTCBRL.bid]);
			this.chart.renderDonutChart("USD", [json.USDBRL.code], [json.USDBRL.bid]);
		});
	}

	check(event: any,id:string) {
		const value = event.checked;
		if (value) {
			this.nome = id;
		}
		console.log(value)
		console.log(this.nome)
	}

}
