import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	image:string = "assets/imgs/user_default.png"

	constructor () { }

	ngOnInit(): void {
	}

}
