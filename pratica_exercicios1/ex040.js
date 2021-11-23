let notas = [ 9.5, 7.2, 5.5, 2.3, 8.5, 11]
notas.sort()  


function conceitoNotas(notas) {
    let notasFinais = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i] >= 0 && notas[i] < 5) {
            notasFinais.push(notas[i] + ' = D')
        } else if(notas[i] >= 5 && notas[i] < 7) {
            notasFinais.push(notas[i] + ' = C')
        } else if(notas[i] >= 7 && notas[i] < 9) {
            notasFinais.push(notas[i] + ' = B')
        } else if(notas[i] >= 9 && notas[i] <= 10) {
            notasFinais.push(notas[i] + ' = A')
        } else {
            notasFinais.push(notas[i] + ' = Nota inválida')
        }
    }
    return notasFinais
}

let vetorConceitos = conceitoNotas(notas)
console.log(vetorConceitos)