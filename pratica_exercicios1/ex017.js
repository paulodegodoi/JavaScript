function aumentoSalario(salario, plano) {
    switch (plano) {
        case 'A':
            return (salario * 0.1) + salario
        case 'B':
            return (salario * 0.15) + salario
        case 'C':
            return (salario * 0.2) + salario
        default:
            return 'Plano Inválido'
    }
}

console.log(aumentoSalario(1000, 'A'))
console.log(aumentoSalario(1100, 'B'))
console.log(aumentoSalario(1200, 'C'))
console.log(aumentoSalario(900, 'F'))