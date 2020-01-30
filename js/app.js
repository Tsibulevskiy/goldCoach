function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var month = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'month': month,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var monthSpan = clock.querySelector('.month');

  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    monthSpan.innerHTML = t.month;

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var leftTime = new Date('2020-02-07T00:00:00');
initializeClock('clockdiv1', leftTime);
initializeClock('clockdiv', leftTime);

var item = document.getElementById('timer');
var elem = document.getElementById('more');
document.addEventListener("DOMContentLoaded", timer());
item.addEventListener('click', function () {
  if (item.classList.contains('ui-tabs-active') == true) {
    if (elem.innerHTML == '1000') {
      timer();
    } else {
      elem.innerHTML = '1000';
    }
  }
});

function timer() {
  var parsElem = parseInt(elem.innerHTML);
  elem.innerHTML = parsElem + 100;
  if (parsElem < 9900) {
    window.setTimeout(timer, 1000);
  }
}





