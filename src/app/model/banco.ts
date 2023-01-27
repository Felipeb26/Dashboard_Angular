export interface Banco {
	id?: string | number,
	nome: string,
	emprestimo: string | number,
	debito: number | string,
	credito: number | string,
	poupanca?: number | string,
	conta?: string | number,
	agencia?: string | number
}
