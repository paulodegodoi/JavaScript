function repetir(item, quantidade) {
    let resultado = []
    for(let i = 0; i < quantidade; i++) {
        resultado.push(item)
    }
    return resultado
}

console.log(repetir(1, 3))