function* generator(){
    //permite que pare a execução e chame de novo quando quisermos
    // para a execucao - espera executar e depois continua
    console.log("iniciadndo o generator")
    yield 1
    console.log("segunda iteracao")
    yield 2
    console.log("terceira iteracao")
    yield 3 
    console.log("final")

}

let gen = generator()
console.log(gen)
gen.next()
let result = gen.next()
console.log(result)