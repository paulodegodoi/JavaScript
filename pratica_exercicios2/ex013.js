//1
function retornarSomenteNums(array) {
    return array.filter(item => typeof item === 'number')
}


//2
function retornarSomenteNums(array) {
    const Nums = []
    for(let item of array)
        if(typeof item === 'number') {
            Nums.push(item)
        }
        return Nums
}

console.log(retornarSomenteNums(['string', 1, 3, 'i']))