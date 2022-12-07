const times = 100;
const delay = 150;

const counterElement = document.getElementById("counter-value");
const valueCounterElement = Number(counterElement.getAttribute("value"));
const interval = Math.floor(valueCounterElement / times);

const counterAnimation = function () {
  const count = Number(counterElement.innerText);
  if (count + interval < valueCounterElement) {
    counterElement.innerText = formatMoney(count + interval);
    setTimeout(counterAnimation, delay);
  } else {
    counterElement.innerText = formatMoney(valueCounterElement);
  }
};

counterAnimation();
