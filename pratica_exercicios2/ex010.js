function simboloMais(quantidade) {
    let resultado = []
    for(let i = 0; i < quantidade; i++) {
        resultado += '+'
    }
    return resultado
}

console.log(simboloMais(5))

function simboloMais2(quantidade) {
    return '+'.repeat(quantidade)
}

console.log(simboloMais2(3))