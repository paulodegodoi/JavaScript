function nImpares(inicio, fim) {
    if(inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim  
    }
    for(let i = inicio; i <= fim; i++) {
        if(i % 2 == 1) {
            console.log(i)
        }
    }
}

console.log(nImpares(100, 0))