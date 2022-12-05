import Car, {CarComAr} from './modules/car.mjs'
import {Bike} from './modules/bike.mjs'
import * as Utils from './modules/utils.mjs'

let carro = new Car();
carro.andar()
console.log(carro.velocidade)
document.getElementById('main').innerHTML = `Velocidade do carro: ${carro.velocidade}<br/>`

let bike = new Bike();
bike.andar()
console.log(bike.velocidade)
document.getElementById('main').innerHTML += `Velocidade da bike: ${bike.velocidade}<br/>`

Utils.funcao1()