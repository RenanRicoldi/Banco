import { ContaBancaria } from './ContaBancaria'

export class ContaPoupanca implements ContaBancaria {
    private cliente: string
    private numeroConta: string
    private saldo: number

    constructor(cliente: string, numeroConta: string, saldo: number) {
        this.cliente = cliente
        this.numeroConta = numeroConta
        this.saldo = saldo
    }
    
    sacar(valor_a_sacar: number): number {
        if(valor_a_sacar > this.saldo) {
            return this.saldo
        }

        this.saldo -= valor_a_sacar
        return this.saldo
    }

    depositar(valor_a_depositar: number): number {
        this.saldo += valor_a_depositar

        return this.saldo
    }

    calcularNovoSaldo(taxa_de_rendimento: number): number {
        this.saldo += (taxa_de_rendimento*this.saldo/100)
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
}