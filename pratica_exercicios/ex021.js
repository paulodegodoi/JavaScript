function convenio(idade) {
    if (idade < 10) {
        return 'Valor do convenio para criança: R$180,00'
    }
    if (idade <= 30) {
        return 'Valor do convenio para pessoas entre 10 a 30 anos: R$150,00'
    }
    if (idade <= 60) {
        return 'Valor do convenio para pessoas com idade entre 31 a 60 anos: R$195,00'
    }
    else {
        return 'Valor para pessoas acima dos 61 anos: R$230,00'
    }
}

console.log(convenio(8))
console.log(convenio(23))
console.log(convenio(35))
console.log(convenio(67))