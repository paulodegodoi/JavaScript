function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2145.90))
console.log(criarProduto('Ipad', 2998.90))