import { ContaBancaria } from './ContaBancaria'
import { ContaCorrente } from './ContaCorrente'
import { ContaInvestimento } from './ContaInvestimento'
import { ContaPoupanca } from './ContaPoupanca'

import scanf from 'scanf'
import { exit } from 'process'

const pergunta =
    '\n\nDigite o número que representa a opção desejada:\n' +
    '1 - Cadastrar a Conta de um Cliente\n' +
    '2 - Sacar um valor da sua conta\n' +
    '3 - Atualizar uma conta poupança com o seu rendimento\n' +
    '4 - Depositar um determinado valor na conta\n' +
    '5 - Mostrar o saldo de uma conta\n' +
    '6 - Calcular os tributos de uma conta\n' +
    '7 - Calcula a taxa de administração de uma conta investimento\n' +
    '0 - Sair do programa\n'

const tipoDeConta =
    '\nDigite o tipo de conta que você quer cadastrar:\n' +
    '1 - Conta Corrente\n' +
    '2 - Conta de Investimentos\n' +
    '3 - Conta Poupança\n' +
    '0 - Voltar\n'

let listaDeContas: Array<ContaBancaria> = []


class Principal {
    nome: string
    numero: string
    saldo: number
    limite: number

    constructor() {
        this.nome = ''
        this.numero = ''
        this.saldo = 0
        this.limite = 0
    }

    main(): void {
        let conta
        let num:string
        let valor: number

        while(true) {
            process.stdout.write(pergunta)
            switch(scanf('%d')) {
                case 1:
                    process.stdout.write(tipoDeConta)
                    switch(scanf('%d')) {
                        case 1:
                            process.stdout.write('Nome do Cliente: ')
                            this.nome = scanf('%S')
                            
                            process.stdout.write('Número da Conta: ')
                            this.numero = scanf('%s')
                            
                            process.stdout.write('Saldo: ')
                            this.saldo = scanf('%f')
                            
                            process.stdout.write('Limite: ')
                            this.limite = scanf('%f')
                            
                            conta = new ContaCorrente(this.nome, this.numero, this.saldo, this.limite)
                            listaDeContas.push(conta) 
                            break
                        case 2:
                            process.stdout.write('Nome do Cliente: ')
                            this.nome = scanf('%S')
                            
                            process.stdout.write('Número da Conta: ')
                            this.numero = scanf('%s')
                            
                            process.stdout.write('Saldo: ')
                            this.saldo = scanf('%f')
                            
                            conta = new ContaInvestimento(this.nome, this.numero, this.saldo)
                            listaDeContas.push(conta) 
                            break
                        case 3:
                            process.stdout.write('Nome do Cliente: ')
                            this.nome = scanf('%S')
                            
                            process.stdout.write('Número da Conta: ')
                            this.numero = scanf('%s')
                            
                            process.stdout.write('Saldo: ')
                            this.saldo = scanf('%f')
                            
                            conta = new ContaPoupanca(this.nome, this.numero, this.saldo)
                            listaDeContas.push(conta) 
                            break
                        default:
                            break
                    }
                    break
                
                case 2:
                    process.stdout.write('Digite o número da conta: ')
                    num = scanf('%s')
                    listaDeContas.find(predicate => {
                        if(
                            (predicate as ContaCorrente).getNumeroConta() === num ||
                            (predicate as ContaInvestimento).getNumeroConta() === num ||
                            (predicate as ContaPoupanca).getNumeroConta() === num
                        ) {
                            process.stdout.write('Digite o valor a ser sacado: R$ ')
                            valor = scanf('%f')
                            process.stdout.write('Novo saldo: R$ ')
                            process.stdout.write(`${predicate.sacar(valor)}\n`)
                            return true
                        }
                         return false
                    })
                    break
                
                case 3:
                    process.stdout.write('Digite o número da conta: ')
                    num = scanf('%s')
                    listaDeContas.find(predicate => {
                        if(
                            (predicate as ContaPoupanca).getNumeroConta() === num
                        ) {
                            process.stdout.write('Digite a Taxa de Rendimento(%): ')
                            valor = scanf('%f')
                            process.stdout.write('Novo saldo: R$ ')
                            process.stdout.write(`${(predicate as ContaPoupanca).calcularNovoSaldo(valor)}\n`)
                            return true
                        }
                         return false
                    })
                    break

                case 4:
                    process.stdout.write('Digite o número da conta: ')
                    num = scanf('%s')
                    listaDeContas.find(predicate => {
                        if(
                            (predicate as ContaCorrente).getNumeroConta() === num ||
                            (predicate as ContaInvestimento).getNumeroConta() === num ||
                            (predicate as ContaPoupanca).getNumeroConta() === num
                        ) {
                            process.stdout.write('Digite o valor a ser Depositado: R$ ')
                            valor = scanf('%f')
                            process.stdout.write('Novo saldo: R$ ')
                            process.stdout.write(`${predicate.depositar(valor)}\n`)
                            return true
                        }
                         return false
                    })
                    break

                case 5:
                    process.stdout.write('Digite o número da conta: ')
                    num = scanf('%s')
                    listaDeContas.find(predicate => {
                        if((predicate as ContaCorrente).getNumeroConta() === num) {
                            process.stdout.write('Saldo atual: R$ ')
                            process.stdout.write(`${(predicate as ContaCorrente).getSaldo()}\n`)
                            return true
                        } else if((predicate as ContaInvestimento).getNumeroConta() === num) {
                            process.stdout.write('Saldo atual: R$ ')
                            process.stdout.write(`${(predicate as ContaInvestimento).getSaldo()}\n`)
                            return true
                        } else if((predicate as ContaPoupanca).getNumeroConta() === num)  {
                            process.stdout.write('Saldo atual: R$ ')
                            process.stdout.write(`${(predicate as ContaPoupanca).getSaldo()}\n`)
                            return true
                        } else {
                            return false
                        }
                    })
                    break
                
                case 6:
                    process.stdout.write('Digite o número da conta: ')
                    num = scanf('%s')
                    listaDeContas.find(predicate => {
                        if(
                            (predicate as ContaInvestimento).getNumeroConta() === num
                        ) {
                            process.stdout.write('Digite a taxa de Rendimento(%): ')
                            valor = scanf('%f')
                            process.stdout.write('Valor do Tributo: R$ ')
                            process.stdout.write(`${(predicate as ContaInvestimento).calcularTributo(valor)}\n`)
                            return true
                        }
                         return false
                    })
                    break

                case 7:
                    process.stdout.write('Digite o número da conta: ')
                    num = scanf('%s')
                    listaDeContas.find(predicate => {
                        if(
                            (predicate as ContaInvestimento).getNumeroConta() === num
                        ) {
                            process.stdout.write('Digite a taxa de Rendimento(%): ')
                            valor = scanf('%f')
                            process.stdout.write('Valor da Taxa de Administração: R$ ')
                            process.stdout.write(`${(predicate as ContaInvestimento).calcularTaxaAdministracao(valor)}\n`)
                            return true
                        }
                         return false
                    })
                    break
                
                default:
                    exit(0)
            }
        }
    }    
}

let principal = new Principal()
principal.main()