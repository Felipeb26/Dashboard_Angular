import { Banco } from "src/app/model/banco"

export interface User {
	id?: number,
	nome: string,
	email: string,
	role: string,
	senha: string,
	nascimento: string
	bancos?:Array<Banco>
}
