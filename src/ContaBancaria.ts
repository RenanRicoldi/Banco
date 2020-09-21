export interface ContaBancaria {
    sacar(valor_a_sacar: number): number;
    depositar(valor_a_depositar: number): number;
}