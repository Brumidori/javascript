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

const cozinha = (pedido, callback) =>
    setTimeout(() => {
        console.log(pedido['nome'] + '  pronto')
        callback(pedido['nome'] + " para o cliente")
    }, pedido['tempo']);


const garcon = (tarefa, callback) => {
    console.log(" Levando " + tarefa)
    callback()
}

const encerrarPedidos = () => {
    console.log("encerra pedidos")
    console.log("paga conta")
}

const fazerPedido1 = garcon("pedido1 para cozinha", () =>
    cozinha(pedido1, retornarPedido1
    )
)
const retornarPedido1 = (retorno1) => garcon(retorno1, fazerPedido2)
const fazerPedido2 = () =>
    garcon("pedido 2 para cozinha", () =>
        cozinha(pedido2, retornarPedido2)
    )
const retornarPedido2 = (retorno2) =>
    garcon(retorno2, () =>
        garcon("pedido 3 para a cozinha", fazerPedido3)
    )
const fazerPedido3 = () => cozinha(pedido3, retornarPedido3)
const retornarPedido3 = (retorno3) =>
    garcon(retorno3, encerrarPedidos())

const janta = () => {
    console.log('iniciando pedidos')
    fazerPedido1()

}

janta()