class Carro {
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
        if(! this.ligadi){
            this.ligar()
        }
        this.velocidade = 40
    }
    }

    let carro1 = new Carro("branco")
    let carro2 = new Carro()
    carro1.andar()
    console.log(carro1.ligado)
    console.log(carro1.cor)
    console.log(carro1.velocidade)
    console.log(carro2.ligado)
    console.log(carro2.velocidade)
    console.log(carro2.__proto__)

    let carro = new Carro()
    console.log(typeof carro)
    let carro3 = Object.create(carro) //criando objeto do tipo-prototipo carro
    let carro4 = Object.create(carro2) // todos os objetos carro tem o mesmo proto
    carro3.andar = function(){//eh possivel sobrescrever funcoes
        console.log("Carro quebrado")
    }
    carro4.andar()
    carro3.andar()
    console.log(carro4.velocidade)
    console.log(carro3.velocidade)