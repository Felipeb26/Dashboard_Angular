import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/components/services/chart.service';
import { CotacaoRequestService } from 'src/app/components/services/cotacao-request.service';
import { CotacaoService } from 'src/app/components/services/cotacao.service';
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
		private cotacao: CotacaoService,
		private chart: ChartService,
		private cotacaoService: CotacaoRequestService) { }

	ngOnInit(): void {
		this.getCurrency();
		setTimeout(() => {
			console.log(this.cotacoes);
		}, 500);
	}


	getCurrency() {
		this.cotacaoService.getAllCurrencys().subscribe((it:Cotacao[]) => this.cotacoes = it);
	}

	check(event: any) {
		const value = event.checked;
		if (value) {
			this.nome = "EURBRL";
		} else {
			this.nome = "BTCBRL";
		}
		console.log(value)
		console.log(this.nome)
	}
}
