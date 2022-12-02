var carro = {}
carro.velocidade = 0
carro.ligado = false
carro.nivelCombustivel = 100
carro.qtdPortas = 4
carro.combustivel = "flex"
carro.cor = "vermelho"
carro.potencia = 100
carro.ligar = function (){
    if (this.ligado = true){
        console.log("Carro já ligado")
    }else{
        this.ligado = true;
    console.log("Carro ligado.")
    }
}
carro.andar = function(){
    if(! this.ligadi){
        this.ligar()
    }
    this.velocidade = 40
}

var carro2 = {}
carro2.velocidade = 0
carro2.ligado = false
carro2.ligar = function (){
    if (this.ligado = true){
        console.log("Carro já ligado")
    }else{
        this.ligado = true;
    console.log("Carro ligado.")
    }
}

carro.ligar()
console.log(carro.ligado)
console.log(carro2.ligado)
carro.andar()
console.log(carro.velocidade)