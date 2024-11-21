import Background from "./util/Background.js";

class Renderer {
  static #HIDDEN_CONSTANT = 'hidden';
  static #element = {
    'loginContainer' : document.querySelector('#login'),
    'logoutContainer' : document.querySelector('#logout'),
    'background' : document.querySelector('body#background')
  }

  // 호출 시점 : 초기화면, submit 및 button 클릭
  static hideLogin() {
    this.#element['loginContainer'].classList.add(this.#HIDDEN_CONSTANT);
  }

  static showLogin() {
    this.#element['loginContainer'].classList.remove(this.#HIDDEN_CONSTANT);
  }

  static hideLogout() {
    this.#element['logoutContainer'].classList.add(this.#HIDDEN_CONSTANT);
  }

  static showLogout() {
    this.#element['logoutContainer'].classList.remove(this.#HIDDEN_CONSTANT);
  }

  static showBackground(imagePath) {
    this.#element['background'].style.backgroundImage = `url(${imagePath})`;
  }
}

export default Renderer;