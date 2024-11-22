import Renderer from "../Renderer.js";

class Background {

  static setBackground() {
    const imageNumber = this.#generateRandomNumber();
    this.#saveBackgroundNumber(imageNumber);
    const imagePath = `/images/background/bg${imageNumber}.jpg`;
    Renderer.showBackground(imagePath);
  }

  static #generateRandomNumber() {
    return this.backgroundNumber = Math.ceil((Math.random()*8));
  }

  static #saveBackgroundNumber(imageNumber) {
    localStorage.setItem('background', imageNumber);
  }

}

export default Background;