"use strict";

//-------------------CONST-------------------
//time
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

//date
const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
const months = {
  0: "JAN",
  1: "FEB",
  2: "MAR",
  3: "APR",
  4: "MAY",
  5: "JUN",
  6: "JUL",
  7: "AUG",
  8: "SEP",
  9: "OCT",
  10: "NOV",
  11: "DEC",
};
const now = document.querySelector(".day");
const todaysDate = document.querySelector(".date-day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

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

  //date
  const day = today.getDay();
  const dayOfMonth = today.getDate();
  const mon = today.getMonth();
  const y = today.getFullYear().toString().substr(-2);

  now.innerHTML = `${days[day]}`;
  todaysDate.innerHTML = `${dayOfMonth}`;
  month.innerHTML = `${months[mon]}`;
  year.innerHTML = `'${y}`;
}

//Necesitamos que esa función se llame constantemente y cada segundo para que actualice el valor de nuestro campo de texto.
// La función setTimeout sirve para hacer el retardo antes de ejecutar la sentencia. La sentencia es una simple llamada a la función y el retardo es de 1000 milisegundos (un segundo).

setInterval(setDate, 1000);

setDate();
