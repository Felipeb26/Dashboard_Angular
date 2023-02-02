import { Token } from './../models/token';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class UserRequestService {

	batsworks: string = "http://localhost:8081/batsworks/"

	constructor (private http: HttpClient) { }

	getLoginToken(username: string, pass: string): Observable<Token> {
		return this.http.get<Token>(`${this.batsworks}login?username=${username}&senha=${pass}`);
	}

	getUser(username: string): Observable<User[]> {
		console.log(username)
		return this.http.get<User[]>(`${this.batsworks}param?email=${username}`)
	}
}
