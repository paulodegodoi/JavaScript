function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.3)
soBoaNoticia(5.5)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

//Falso não aparece

seForVerdadeEuFalo()
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(true)
//...