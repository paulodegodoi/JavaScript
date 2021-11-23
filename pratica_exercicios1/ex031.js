function numNegativos(vetor) {
    let Negativos = 0
    for (let i in vetor) {
        if (vetor[i] < 0)
            Negativos++
    }
    return `${Negativos} números negativos`
}

vetor = [1, 0, -3, -5, 8, -1]

console.log(numNegativos(vetor))