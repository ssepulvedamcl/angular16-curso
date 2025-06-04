const moment = require('moment');
console.log("Hoy es: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log("Día de la semana: " + moment().format('dddd'));
console.log("Hora actual: " + moment().format('h:mm:ss a'));
console.log("Fecha y hora en formato ISO: " + moment().toISOString());     