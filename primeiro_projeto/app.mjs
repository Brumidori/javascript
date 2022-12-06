 /*config do projeto - instalacao npm highlight.js, express, webpack,yarn
*/
//instalacao npm moment(trabalha com horas)

import moment from 'moment';

moment.locale("pt-BR")
let data = moment().format('D [de] MMMM [de] YYYY' )
let hora = moment().format('H:mm:ss')
console.log(data)
console.log(hora)