const vetor = [1, 2, 3, 4, 5]
const multiplicador = 4

function multiplicaVetor (vetor, multiplicador) {
    const vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    })
    return vetorResultado
}

function multiplicaVetor5 (vetor, multiplicador) {
    if(multiplicador >= 5) {
        const vetorResultado = []
        vetor.forEach(elemento => {
            vetorResultado.push(elemento * multiplicador)
        })
    return vetorResultado
    } else {
        return 'Multiplicador menor do que 5'
    }
}

console.log(multiplicaVetor(vetor, multiplicador))
console.log(multiplicaVetor5(vetor, multiplicador))