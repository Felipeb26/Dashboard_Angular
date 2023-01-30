import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConvertsService } from 'src/app/components/services/converts.service';
import { Banco } from 'src/app/model/banco';

@Component({
	selector: 'app-valores',
	templateUrl: './valores.component.html',
	styleUrls: ['./valores.component.scss']
})
export class ValoresComponent implements OnInit {

	bankForm!: FormGroup

	bancos: Array<Banco> = [{
		id: 1,
		nome: "nubank",
		debito: 1900,
		credito: 200,
		emprestimo: 3500,
		poupanca: 0,
		agencia: "0001",
		conta: "0025215141"
	}]

	constructor (private convert: ConvertsService) { }

	ngOnInit(): void {
		this.bankForm = new FormGroup({
			id: new FormControl(""),
			nome: new FormControl("", [Validators.required]),
			emprestimo: new FormControl("", [Validators.required]),
			debito: new FormControl("", [Validators.required]),
			credito: new FormControl("", [Validators.required]),
			poupanca: new FormControl("", [Validators.required]),
			conta: new FormControl("", [Validators.required]),
			agencia: new FormControl("", [Validators.required]),
		});
		this.setTotalValue();
	}

	addBank() {
		const id = <FormArray>this.bankForm.controls["id"];
		const nome = <FormArray>this.bankForm.controls["nome"];
		const emprestimo = <FormArray>this.bankForm.controls["emprestimo"];
		const debito = <FormArray>this.bankForm.controls["debito"];
		const credito = <FormArray>this.bankForm.controls["credito"];
		const poupaca = <FormArray>this.bankForm.controls["poupanca"];
		const conta = <FormArray>this.bankForm.controls["conta"];
		const agencia = <FormArray>this.bankForm.controls["agencia"];

		if (this.bankForm.invalid) {
			return;
		}

		if (id.value > 0) {
			const index = this.bancos.findIndex(it => it.agencia === agencia.value);
			const object = {
				id: id.value,
				nome: nome.value,
				emprestimo: emprestimo.value,
				debito: debito.value,
				credito: credito.value,
				poupanca: poupaca.value,
				conta: conta.value,
				agencia: agencia.value
			}
			this.bancos.splice(index, 1, object);
			this.resetFormValues();
			this.setTotalValue();
		}

		if (this.bancos.findIndex(it => it.nome === nome.value) > -1) {
			this.setTotalValue();
			this.resetFormValues();
			return;
		} else {
			this.bancos.push(this.bankForm.value);
			this.setTotalValue();
			this.resetFormValues();
		}
	}

	deleteBankInfo(event: Banco) {
		const index = this.bancos.findIndex(it => it.nome === event.nome);
		this.bancos.splice(index, 1)
	}

	editBankInfo(event: Banco) {
		this.bankForm.setValue({
			id: event.id,
			nome: event.nome,
			emprestimo: event.emprestimo,
			debito: event.debito,
			credito: event.credito,
			poupanca: event.poupanca,
			conta: event.conta,
			agencia: event.agencia,
		});
	}

	resetFormValues() {
		setTimeout(() => {
			this.bankForm.setValue({
				id: "",
				nome: "",
				emprestimo: "",
				debito: "",
				credito: "",
				poupanca: "",
				conta: "",
				agencia: "",
			});
		}, 500);
	}

	setTotalValue() {
		let conta = 0;
		for (let i = 0; i < this.bancos.length; i++) {
			conta = this.bancos[i].debito + this.bancos[i].credito + Number(this.bancos[i].emprestimo) + Number(this.bancos[i].poupanca);
			this.bancos[i].value = conta;
		}
	}

}
