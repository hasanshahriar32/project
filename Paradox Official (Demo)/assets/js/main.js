
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Countdown timer
   */

  let countdown = select('.countdown');

  const countDownDate = function() {
    let timeleft = new Date(countdown.getAttribute('data-count')).getTime() - new Date().getTime();

    let weeks = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    let output = countdown.getAttribute('data-template');
    output = output.replace('%w', weeks).replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
    countdown.innerHTML = output;
  }
  countDownDate();
  setInterval(countDownDate, 1000);

})()