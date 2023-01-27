import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Banco } from 'src/app/model/banco';

@Component({
	selector: 'app-valores',
	templateUrl: './valores.component.html',
	styleUrls: ['./valores.component.scss']
})
export class ValoresComponent implements OnInit {

	bankForm!: FormGroup

	bancos: Array<Banco> = [{
		nome: "nubank",
		debito: 1900,
		credito: 200,
		emprestimo: 3500,
		poupanca: 0,
		agencia: "0001",
		conta: "0025215141"
	}]

	constructor () { }

	ngOnInit(): void {
		this.bankForm = new FormGroup({
			nome: new FormControl("", [Validators.required]),
			emprestimo: new FormControl("", [Validators.required]),
			debito: new FormControl("", [Validators.required]),
			credito: new FormControl("", [Validators.required]),
			poupanca: new FormControl("", [Validators.required]),
			conta: new FormControl("", [Validators.required]),
			agencia: new FormControl("", [Validators.required]),
		});
	}

	addBank() {
		if(this.bankForm.invalid){
			return;
		}

		this.bancos.push(this.bankForm.value);
		console.log(this.bankForm.value)
	}

}
