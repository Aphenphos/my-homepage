const timePin = document.querySelector('#clock');
const dowPin = document.querySelector('#dow');
const datePin = document.querySelector('#date');

function startTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let dow = today.toLocaleString('default', { weekday: 'long' });
    minute = checkTime(minute);
    setTimeout(startTime, 5000);

    timePin.textContent = `${hour}:${minute}`;
    datePin.textContent = `${month}-${day}-${year}`;
    dowPin.textContent = `${dow}`;
}
  
function checkTime(i) {
    if (i < 10) {i = `0${i}`;} 
    return i;
}

function display() {
    startTime();
}

display();