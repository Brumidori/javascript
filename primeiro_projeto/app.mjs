 /*config do projeto - instalacao npm highlight.js, express, webpack,yarn*/
//o certo eh nao deixar modules no repositorio - pois vai instalar tudo para quem for usar. Apenas o json
// o lock.jason registra as alteracoes no module - controla a versao dos pacotes (evita reinstalar pacotes e verifica atualizacao)
//instalacao npm moment(trabalha com horas)
//npx executa pacotes do node sem precisar instalar
//yarn gerenciador de pacote criado pelo Facebook
//substituir lock.json pelo yarn para nao dar conflito

import moment from 'moment';

moment.locale("pt-BR")
let data = moment().format('D [de] MMMM [de] YYYY' )
let hora = moment().format('H:mm:ss')
console.log(data)
console.log(hora)