import { UserRequestService } from './../../components/services/user-request.service';
import { Token } from './../../components/models/token';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	image: string = "assets/imgs/user_default.png"

	nome: string = "";
	senha: string = "";

	constructor (private route: Router,
		private request: UserRequestService) { }

	ngOnInit(): void {
		this.enterBtn()
	}

	enterBtn() {
		window.addEventListener("keypress", (event) => {
			if (event.key === "Enter") {
				this.login();
			}
		})
	}

	login() {
		if (this.nome.trim().length < 1 || this.senha.trim().length < 0) {
			window.alert("inisira")
			return
		}

		this.request.getLoginToken(this.nome, this.senha).subscribe(data => {
			localStorage.setItem("tk", data.token);
		})

	}

}
