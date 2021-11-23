function MaiorEMenor(vetor) {
    let Maior = vetor[0]
    let Menor = vetor[0]
    for (let i in vetor) {
        if (vetor[i] > Maior)
            Maior = vetor[i]
        if (vetor[i] < Menor)
            Menor = vetor[i]
    }
    return `O menor número do intervalo é ${Menor} e o maior é ${Maior}`
}

vetor = [8, 3, 2, 15, 7, 10]
console.log(MaiorEMenor(vetor))