class Car {
    velocidade = 0
    ligado = false
    nivelCombustivel = 100

    constructor(cor){
        console.log("Carro criado")
        this.cor = cor

    }
    ligar (){
        if (this.ligado = true){
            console.log("Carro já ligado")
        }else{
            this.ligado = true;
        console.log("Carro ligado.")
        }
    }
    andar (){
        if(! this.ligado){
            this.ligar()
        }
        if(! this.velocidade > 0){
            console.log("carro já em movimento")
        }
        this.velocidade = 40
    }
}

class CarComAr{}

function calculaIdade(){}

const bla = "bla"

export default Car; //podemos definir a exportacao obrigatoria
export {CarComAr, calculaIdade, bla} //eh possivel exportar mais de uma coisa

    