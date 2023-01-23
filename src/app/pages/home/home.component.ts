import { Cotacao } from './../../components/models/cotacao';
import { Component, OnInit } from '@angular/core';
import { CotacaoRequestService } from 'src/app/components/services/cotacao-request.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	nome: string = "BTCBRL"
	cotacoes: Cotacao[] = [];

	constructor
		(private router: Router,
			private cotacaoService: CotacaoRequestService) { }

	ngOnInit(): void {
		this.getCurrency();
		setTimeout(() => {
			console.log(this.cotacoes);
		}, 500);
	}


	getCurrency() {
		this.cotacaoService.getAllCurrencys().subscribe(it => this.cotacoes = it);
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
