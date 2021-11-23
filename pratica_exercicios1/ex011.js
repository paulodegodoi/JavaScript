function calcularAnoBissxto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return true
    } else if (ano % 4 == 0) {
        return true
    } else
        return false
}

console.log(calcularAnoBissxto(0))
console.log(calcularAnoBissxto(150))
console.log(calcularAnoBissxto(400))
console.log(calcularAnoBissxto(2000))
console.log(calcularAnoBissxto(2016))
console.log(calcularAnoBissxto(2021))