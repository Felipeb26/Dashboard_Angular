import { ConvertsService } from 'src/app/components/services/converts.service';
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

	BITCOIN: boolean = true;
	EURO: boolean = false;
	DOLLAR: boolean = false;

	ids: any = [];
	cotacoes: Cotacao[] = [];
	bitcoin: any = []
	euro: any = []
	dollar: any = []
	nome: string = "BTCBRL"


	constructor (
		private cotacaoService: CotacaoRequestService,
		private convert: ConvertsService,
		private chart: ChartService,) { }

	ngOnInit(): void {
		this.getCurrency();
	}


	getCurrency() {
		this.cotacaoService.getAllCurrencys().subscribe((it) => {
			const json = JSON.parse(JSON.stringify(it));
			this.cotacoes.push(json.BTCBRL);
			this.cotacoes.push(json.EURBRL);
			this.cotacoes.push(json.USDBRL);

			this.chart.renderDonutChart("EUR", [json.EURBRL.code], [json.EURBRL.bid]);
			this.chart.renderDonutChart("BTC", [json.BTCBRL.code], [json.BTCBRL.bid]);
			this.chart.renderDonutChart("USD", [json.USDBRL.code], [json.USDBRL.bid]);
		});
	}

	check(event: any, id: string) {
		const value = event.checked;
		if (value) {
			this.nome = id;
		}
		if (id.startsWith("BTC")) {
			this.BITCOIN = value;
			this.EURO = false;
			this.DOLLAR = false;
		} else if (id.startsWith("EUR")) {
			this.BITCOIN = false;
			this.EURO = value;
			this.DOLLAR = false;
		} else if (id.startsWith("USD")) {
			this.BITCOIN = false;
			this.EURO = false;
			this.DOLLAR = value;
		}
	}

}
