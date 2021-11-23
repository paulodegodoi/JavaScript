function divisao(dividendo, divisor) {
    resultado = dividendo / divisor
    resto = dividendo % divisor

    return `Resultado: ${resultado} | Resto: ${resto}`
}

console.log(divisao(3, 2))