import {Car, Bike} from './modules/agregation.mjs'
import * as Utils from './modules/utils.mjs'

let bike = new Bike();
bike.andar()
console.log(bike.velocidade)
document.getElementById('main').innerHTML += `Velocidade da bike: ${bike.velocidade}<br/>`

Utils.funcao1()

document.getElementById("carregar").addEventListener( 'click', function(){
    import ("./modules/car.mjs").then((module) => { //funcao assincrona - primeiro vai fazer a importacao e depois a funcao
        let carro = new module.default;
        carro.andar()
        console.log(carro.velocidade)
        document.getElementById('main').innerHTML = `Velocidade do carro: ${carro.velocidade}<br/>`
    })
})
