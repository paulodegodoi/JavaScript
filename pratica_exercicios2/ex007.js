function estaEntre(numero, minimo, maximo, inclusivo) {
    if(inclusivo == true) {
        if(numero >= minimo && numero <= maximo) {
            return true
        } else return false
    } else if(inclusivo == false || inclusivo == undefined) {
        return false
    }
}

console.log(estaEntre(10, 1, 100))