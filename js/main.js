"use strict";

//-------------------CONST-------------------

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

//-------------------FUNCTIONS-------------------

function setDate() {
  const today = new Date(); //Para tomar la hora vamos a hacer uso del objeto Date de Javascript. Si creamos una nueva instancia del objeto Date sin pasarle parámetros se inicializa a la fecha y hora actuales.
  //Seconds
  const second = today.getSeconds(); //obtenemos segundos
  const secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  //Minutes

  const minute = today.getMinutes(); //obtenemos minutos
  const minuteDegrees = (minute / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;

  //Hour
  const hour = today.getHours(); //obtenemos horas
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

//Necesitamos que esa función se llame constantemente y cada segundo para que actualice el valor de nuestro campo de texto.
// La función setTimeout sirve para hacer el retardo antes de ejecutar la sentencia. La sentencia es una simple llamada a la función y el retardo es de 1000 milisegundos (un segundo).

setInterval(setDate, 1000);

setDate();
