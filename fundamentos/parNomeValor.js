// par nome/valor

const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Principal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)