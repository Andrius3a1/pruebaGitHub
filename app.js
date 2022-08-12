const arregloDeNumeros = [1,2,3,4,5,6,7,8,9]

const strings = arregloDeNumeros.map((e) => e.toString())
const total = arregloDeNumeros.reduce((acc, e) => acc + e, 0)
const stringConcat = strings.reduce((acc, e) => acc + e, "")
console.log(strings)
console.log(total)
console.log(stringConcat)
