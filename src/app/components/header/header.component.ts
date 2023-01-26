import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
		this.checkyStyle();
	}

	sair() {
		this.route.navigate(["login"])
	}

	changeState() {
		const html = document.querySelector('html')
		if (this.state.startsWith("light")) {
			html!.setAttribute("dark", "true");
			localStorage.setItem('dark-mode', "true");
			localStorage.setItem("context", "#00ffff")
			window.location.href = "";
			this.state = "dark";
		} else {
			window.location.href = "";
			html!.removeAttribute("dark");
			localStorage.removeItem("context")
			localStorage.removeItem('dark-mode');
			this.state = "light";
		}
	}

	checkyStyle() {
		const html = document.querySelector('html')
		const style = localStorage.getItem("dark-mode");
		if (style?.startsWith("true")) {
			html!.setAttribute("dark", "true");
			localStorage.setItem("context", "#00ffff")
			this.state = "dark";
		}
	}

}
