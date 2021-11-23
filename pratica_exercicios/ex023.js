function calcularNotaFinal(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 7.8, 6, 3.5)

/*
function mediaP(codigo, a, b, c) {
    if (a > b && a > c) {
        let m = ((a * 4) + (b * 3) + (c * 3)) / 10

        let miaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}
        if (m >= 5) {
        return `Aluno (${codigo}) | Notas: ${a}, ${b}, ${c} | Média: ${m} | APROVADO`
          }
        } else {
           return 'Reprovado'
    }
}

console.log(mediaP(151, 8, 8, 8))
*/