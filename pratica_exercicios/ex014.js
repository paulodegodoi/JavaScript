function escolherFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log("Não vendemos essa fruta aqui")
            break
        case 'kiwi':
            console.log("Estamos com escassez de kiwis")
            break
        case 'melancia':
            console.log("Aqui está, custa R$ 3,00 o quilo")
            break
        default:
            console.log("Erro, fruta inválida.")
    }
}

escolherFruta('maçã')
escolherFruta('kiwi')
escolherFruta('melancia')
escolherFruta('banana')