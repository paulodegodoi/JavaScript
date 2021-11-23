function jurosCompostos(mes, valor) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * (1 + 0.05) ** atraso).toFixed(2)
    }
}

console.log(jurosCompostos(1, 100))
console.log(jurosCompostos(2, 100))
console.log(jurosCompostos(3, 100))
console.log(jurosCompostos(4, 100))