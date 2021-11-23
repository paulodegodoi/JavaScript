function calcular(numero1, operador, numero2) {
    switch (operador) {
        case '+':
            return `${numero1} + ${numero2} = ${numero1 + numero2}`
        case '-':
            return `${numero1} - ${numero2} = ${numero1 - numero2}`
        case '*':
            return `${numero1} * ${numero2} = ${numero1 * numero2}`
        case '/':
            return `${numero1} / ${numero2} = ${numero1 / numero2}`
        default:
            return 'Função inválida'
    }
}

console.log(calcular(1, '+', 3))
console.log(calcular(2, '-', 5))
console.log(calcular(3, '*', 3))
console.log(calcular(2, '/', 2))
console.log(calcular(1, '**', 1))