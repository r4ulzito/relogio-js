const hoursPont = document.querySelector(".hand.hours");
const minutesPont = document.querySelector(".hand.minutes");
const secondsPont = document.querySelector(".hand.seconds");
//Altera os Rotations
const setRotation = (element, rotationPercent) => {
  element.style.setProperty("--rotation", rotationPercent * 360); //Define uma variavel para o element
};

//Define Minutos, Horas e Segundos
const setClock = () => {
  const currentDate = new Date(); //Recebe a data do dia atual

  const secondsPercents = currentDate.getSeconds() / 60; //Guarda os segundos do 'currentDate' como porcentagem
  const minutesPercents = (secondsPercents + currentDate.getMinutes()) / 60; //Guarda os minutos do 'currentDate' como porcentagem
  const hoursPercents = (minutesPercents + currentDate.getHours()) / 12; //Guarda as horas do 'currentDate' como porcentagem

  setRotation(secondsPont, secondsPercents);
  setRotation(minutesPont, minutesPercents);
  setRotation(hoursPont, hoursPercents);
};

setClock();

setInterval(setClock, 1000);
