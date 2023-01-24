import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotacao } from '../models/cotacao';

@Injectable({
	providedIn: 'root'
})
export class CotacaoRequestService {
	url: string = `https://economia.awesomeapi.com.br/json/last/`;
	moedas: string = "USD-BRL,EUR-BRL,BTC-BRL";

	constructor (private http: HttpClient) { }

	getAllCurrencys(): Observable<Cotacao[]> {
		return this.http.get<Cotacao[]>(`${this.url}${this.moedas}`);
	}

	getFechamentoPorDias(currency:string,days:number):Observable<Cotacao[]>{
		this.url = this.url.replace("last","daily");
		return this.http.get<Cotacao[]>(`${this.url}${currency}/${days}`)
	}

}
