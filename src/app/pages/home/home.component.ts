import { Cotacao } from './../../components/models/cotacao';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/components/services/chart.service';
import { CotacaoService } from 'src/app/components/services/cotacao.service';
import { Cotacao } from './../../model/cotacao';
import { CotacaoRequestService } from 'src/app/components/services/cotacao-request.service';
import { Router } from '@angular/router';

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

  constructor() { }

  ngOnInit(): void {
  }

}
