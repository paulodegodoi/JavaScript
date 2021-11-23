function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 100:
            var valor = quantidade * 3
            return console.log(`${quantidade}x Cachorro Quente - Preço ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

        case 200:
            var valor = quantidade * 4
            return console.log(`${quantidade}x Hambúrguer Simples - Preço ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

        case 300:
            var valor = quantidade * 5.5
            return console.log(`${quantidade}x Cheeseburguer - Preço ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

        case 400:
            var valor = quantidade * 7.5
            return console.log(`${quantidade}x Bauru - Preço ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

        case 500:
            var valor = quantidade * 3.50
            return console.log(`${quantidade}x Refrigerante - Preço ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

        case 600:
            var valor = quantidade * 2.80
            return console.log(`${quantidade}x Suco - Preço ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    }
}

cardapio(100, 2)
cardapio(200, 2)
cardapio(300, 1)
cardapio(400, 3)
cardapio(500, 1)
cardapio(600, 2)