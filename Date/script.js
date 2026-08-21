const title = document.querySelector("h1");

const timer = document.querySelector(".timer");

const hours = timer.querySelector(".timer__hours");
const minutes = timer.querySelector(".timer__minutes");
const seconds = timer.querySelector(".timer__seconds");
const millisecond = timer.querySelector(".timer__milliseconds");

const timeElement = [hours, minutes, seconds, millisecond];

function handleButtonClick() {
  const userDate = new Date();
  const userTime = userDate.toString().split(" ")[4];
  const userHours = userDate.getHours();
  const userMinutes = userDate.getMinutes();
  const userSeconds = userDate.getSeconds().toString().padStart(2, "0");
  const userMillisecond = userDate
    .getMilliseconds()
    .toString()
    .padStart(3, "0");

  const timeValues = [userHours, userMinutes, userSeconds, userMillisecond];

  timeElement.forEach((element, index) => {
    element.innerText = timeValues[index];
  });

  // title.innerText = `${userTime}:${userMillisecond}`;
}

let timerId;

let isRunning = false;

const startTimer = () => {
  if (timerId !== undefined) return;
  isRunning = true;
  handleButtonClick();
  timerId = setInterval(handleButtonClick, 16.6);
};

const stopTimer = () => {
  clearInterval(timerId);
  timerId = undefined;
};

// Данные, состояние, действие.
