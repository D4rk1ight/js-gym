const title = document.querySelector("h1");

function handleButtonClick() {
  const userDate = new Date();

  const time = userDate.toString().split(" ")[4];
  const millisecond = userDate.getMilliseconds().toString().padStart(3, "0");

  title.innerText = `${time}:${millisecond}`;
}

let timerId;

const startTimer = () => {
  if (timerId !== undefined) return;
  handleButtonClick();
  timerId = setInterval(handleButtonClick, 16.6);
};

const stopTimer = () => {
  clearInterval(timerId);
  timerId = undefined;
};
