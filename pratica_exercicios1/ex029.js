function intervaloNumeros(vetor) {
    let DentroIntervalo = 0
    let ForaIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            DentroIntervalo++
        } else {
            ForaIntervalo++
        }
    }
    return `${DentroIntervalo} números dentro do intervalo 
${ForaIntervalo} números fora do intervalo`
}

vetor = [2, 5, 7, 8, 9, 10, 12, 13, 16, 17, 19, 20, 22]

console.log(intervaloNumeros(vetor))