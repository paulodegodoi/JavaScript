function comprarHatch(veiculo) {
    switch (veiculo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedan':
            console.log('Tem certeza que não prefere este modelo?')
            break
        case 'motocicleta':
            console.log('Tem certeza que não prefere este modelo?')
            break
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não traalhamos com este tipo de automóvel.')
    }
}

comprarHatch('hatch')
comprarHatch('sedan')
comprarHatch('motocicleta')
comprarHatch('caminhonete')
comprarHatch('hornet')