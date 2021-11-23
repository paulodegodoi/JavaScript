function imprimirNomeGritado(obj) {
    console.log(obj.nome.toUpperCase() + '!!!')
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)