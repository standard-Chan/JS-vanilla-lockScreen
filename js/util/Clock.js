import Renderer from "/js/Renderer.js";


class Clock {
  #element = {
    'timeText' : document.querySelector('#clock-time-text'),
    'dateText' : document.querySelector('#clock-date-text')
  };
  #dayOfWeek = {
    0 : '일요일',
    1 : '월요일',
    2 : '화요일',
    3 : '수요일',
    4 : '목요일',
    5 : '금요일',
    6 : '토요일'
  }

  constructor() {
    this.date = new Date();
    const date = this.date; 
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.month = date.getMonth();
    this.date = date.getDate();
    this.dayOfWeek = date.getDay();
    
  }

  showClock() {
    Renderer.showClock();
    this.#updateTime();
    setInterval(this.#updateTime.bind(this), 1000);
  }

  #updateTime() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.#element['timeText'].textContent = this.#getTimeText();
    this.#element['dateText'].textContent = this.#getdateText();
  }

  #getTimeText() {
    const timeText = `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`;

    return timeText;
  }

  #getdateText() {
    const dayOfWeek = this.#dayOfWeek[this.dayOfWeek];
    const dateText = `${this.month}월 ${this.date}일 ${dayOfWeek}`;
    return dateText;
  }

}

export default Clock;