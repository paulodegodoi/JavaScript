function tipoDoParametro(valor) {
    const tipo = typeof(valor)

    if (tipo == 'boolean') return !valor
    else if (tipo == 'number') return -valor
    else return `Digite booleano ou número, o tipo do parâmetro digitado foi ${tipo}`
}


console.log(tipoDoParametro('a'))