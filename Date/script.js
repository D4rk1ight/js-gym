const timer = document.querySelector(".timer");

class Timer {
  constructor(rootElement) {
    this.hours = rootElement.querySelector(".timer__hours");
    this.minutes = rootElement.querySelector(".timer__minutes");
    this.seconds = rootElement.querySelector(".timer__seconds");
    this.millisecond = rootElement.querySelector(".timer__milliseconds");
    this.elements = [this.hours, this.minutes, this.seconds, this.millisecond];

    this.timerId = undefined;
    this.isRunning = false;
  }

  update() {
    const userDate = new Date();
    const userHours = userDate.getHours().toString().padStart(2, "0");
    const userMinutes = userDate.getMinutes().toString().padStart(2, "0");
    const userSeconds = userDate.getSeconds().toString().padStart(2, "0");
    const userMillisecond = userDate
      .getMilliseconds()
      .toString()
      .padStart(3, "0");

    const values = [userHours, userMinutes, userSeconds, userMillisecond];

    this.elements.forEach((element, index) => {
      element.innerText = values[index];
    });
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.timerId = setInterval(() => this.update(), 1);
  }

  stop() {
    this.timerId = clearInterval(this.timerId);
    this.isRunning = false;
  }
}

const timerInstance = new Timer(timer);

console.log(timerInstance);
