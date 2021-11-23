function pontosBasquete() {
    let pontos = "10, 8, 2, 4, 20, 15, 32"
    const e_num = pontos.split(" ");

    let recorde = Math.max.apply(null, e_num)
    let piorPonto = Math.min.apply(null, e_num)

    return `Recorde: ${recorde} | Pior pontuacao: ${piorPonto}`

}

console.log(pontosBasquete())