import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	opened: boolean = false;
	state: string = "light"

	constructor (private route: Router) { }

	ngOnInit(): void {
	}

	sair() {
		this.route.navigate(["login"])
		console.log("saiu")
	}

	changeState() {
		const html = document.querySelector('html')
		if (this.state.startsWith("light")) {
			html!.setAttribute("dark", "true");
			localStorage.setItem('dark-mode', "true");
			this.state = "dark";
		} else {
			this.state = "light";
			html!.removeAttribute("dark");
			localStorage.removeItem('dark-mode');
		}
	}

}
