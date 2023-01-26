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

	constructor (private route: Router) { }

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

		if (this.nome.startsWith("felipe") && this.senha.startsWith("2626")) {
			localStorage.setItem("tk","true");
			this.route.navigate([""]);
		}
	}

}
