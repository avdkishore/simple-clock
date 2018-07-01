const DAY_ENUM = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function calculateTime() {
  const date = new Date();

  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  const currDate = date.getDate();
  const currMonth = date.getMonth() + 1; /* returns months starting from 0 through 11 */
  const currYear = date.getFullYear();
  const currDay = DAY_ENUM[date.getDay()];

  /* REF => https://en.wikipedia.org/wiki/Clock_angle_problem */
  const hoursDeg = (0.5 * (60 *  hours + mins)) + 90;
  const minsDeg =  (6 * mins) + 90;
  const secsDeg = ((secs / 60) * 360) + 90;
  
  const hoursHand = document.querySelector('.hand.hour-hand');
  const minsHand = document.querySelector('.hand.min-hand');
  const secsHand = document.querySelector('.hand.sec-hand');

  hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
  minsHand.style.transform = `rotate(${minsDeg}deg)`;
  secsHand.style.transform = `rotate(${secsDeg}deg)`;
}

calculateTime();

setInterval(calculateTime, 1000);