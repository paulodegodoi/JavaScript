function MediaA(vetor) {
    let total = vetor.length
    let soma = 0
    for (let pos in vetor) {
        soma += vetor[pos]


    }
    media = soma / total
    return `A média dos valores é ${media}`
}

vetor = [2, 3, 4, 7, 10]

console.log(MediaA(vetor))