function PrimeiroEUltimoElemento(vetor) {
    const primeiroElemento = vetor.shift()
    const ultimoElemento = vetor.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(PrimeiroEUltimoElemento([1, 2, 3, 4, 'ultimo']))