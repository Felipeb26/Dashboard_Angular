import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from 'src/app/model/type';

@Injectable({
	providedIn: 'root'
})
export class CotacaoService {

	moedas:string="USD-BRL,EUR-BRL,BTC-BRL";
	url:string=`https://economia.awesomeapi.com.br/last/${this.moedas}`;

	constructor (private http:HttpClient) { }

	getCotacao():Observable<Type[]>{
		return this.http.get<Type[]>(this.url);
	}
}
