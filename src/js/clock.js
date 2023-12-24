const $clock = document.querySelector('#clock');

function updateClock() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    $clock.innerHTML = `${hour} : ${minutes}`;
  } setInterval(updateClock, 1000);