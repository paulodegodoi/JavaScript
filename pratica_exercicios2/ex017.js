function somarNumerosArray(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0 )

    return soma
}

console.log(somarNumerosArray([1, 1, 1]))