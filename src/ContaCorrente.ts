import { ContaBancaria } from './ContaBancaria'

export class ContaCorrente implements ContaBancaria {
    private cliente: string
    private numeroConta: string
    private saldo: number
    private limite: number

    constructor(cliente: string, numeroConta: string, saldo: number, limite: number) {
        this.cliente = cliente
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.limite = limite
    }
    
    sacar(valor_a_sacar: number): number {
        if(valor_a_sacar > this.saldo + this.limite) {
            return this.saldo
        }

        this.saldo -= valor_a_sacar
        return this.saldo
    }

    depositar(valor_a_depositar: number): number {
        this.saldo += valor_a_depositar

        return this.saldo
    }

    getCliente(): string {
        return this.cliente
    }

    setCliente(cliente: string): void {
        this.cliente = cliente
    }

    getNumeroConta(): string {
        return this.numeroConta
    }

    setNumeroConta(numeroConta: string): void {
        this.numeroConta = numeroConta
    }

    getSaldo(): number {
        return this.saldo
    }

    setSaldo(saldo: number): void {
        this.saldo = saldo
    }

    getLimite(): number {
        return this.limite
    }

    setLimite(limite: number): void {
        this.limite = limite
    }
}