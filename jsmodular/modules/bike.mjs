class Bike {
    velocidade = 0
    ligado = false

    constructor(cor){
        console.log("Bike criada")
        this.cor = cor

    }

    
    andar (){
        if(! this.velocidade > 0){
            console.log("bicicleta já em movimento")
        }
        this.velocidade = 5
    }
}

export {Bike}