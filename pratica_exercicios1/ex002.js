function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Triângulo EQUILÁTERO'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Triângulo ISÓSCELES'
    } else {
        return 'Triângulo ESCALENO'
    }
}

console.log(classificarTriangulo(2, 2, 2))
console.log(classificarTriangulo(2, 3, 2))
console.log(classificarTriangulo(2, 3, 4))