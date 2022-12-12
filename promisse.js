let pedido1 = {
    'nome': 'pedido1',
    'tempo': 3000
}
let pedido2 = {
    'nome': 'pedido2',
    'tempo': 1000
}
let pedido3 = {
    'nome': 'pedido3',
    'tempo': 2000
}

const cozinha = (pedido) => new Promise((resolve, reject) => {
    console.log('executando promisse')
    let tenhoIngredientes = true

    setTimeout(() => {
        if (tenhoIngredientes) {
            console.log(pedido['nome'] + '  pronto')
            resolve(pedido['nome'] + " para cliente")
        }
        reject("sem ingredientes")
    }, pedido['tempo']);
})

const janta = () => {
    console.log('iniciando pedidos')
    cozinha(pedido1).then (
        (retorno)=>{
            console.log(retorno)
            console.log('comer')
        }).then(() => cozinha(pedido2)
        ).then(() => (cozinha(pedido3))
        ).catch (retorno => {
            console.log(retorno)
            console.log("mudar pedido ")
        }). finally (
            () => console.log("pedir conta")
        )
    
}

janta()