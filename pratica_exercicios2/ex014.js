function objetoParaArray(objeto) {
    const resultado = []

    for(let chave in objeto) {
        resultado.push([ chave , objeto[chave] ])
    }
    return resultado
}

console.log(objetoParaArray({nome: 'Paulo', idade: 21}))

function objetoParaArray2(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray2({nome: 'Clinton', idade: '35'}))