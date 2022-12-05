let objeto1 = { //cria objeto com artributo de funcao - encapsulamento das functions
    "funcao1" : function(){
        console.log("funcao1")
    }
}

let objeto2 = { //nao tem probloema de sobrescrever, pois estao encapsuladas
    "funcao1" : function(){
        console.log("nova funcao1")
    }
}

objeto1.funcao1();
objeto2.funcao1();

{ //dessa forma tb nao sobrescreve pois as functions estao em escopos definidos
    let funcao2 = function(){
        console.log("funcao 2")
    }
    funcao2();
}
{
    let funcao2 = function(){
        console.log("nova funcao2")
    }
    funcao2();
}

(function(){ //cria uma funcao anonima para guardar outra funcao dentro de um escopo
    function funcao3(){
        console.log("funcao3 encapsulada")
    }
    funcao3();
}()) //invoca a funcao imediatamente
function funcao3(){
    console.log("funcao3")
}
funcao3();
