import Renderer from "../Renderer.js";
import Background from "../util/Background.js";


class Logout {
  #element = {
    'logout' : document.querySelector('#logout'),
    'button' : document.querySelector('#logout-button')
  }

  constructor() {
    this.#initEvent();
  }

  #initEvent() {
    this.#element['button'].addEventListener('click', this.#onClickButton.bind(this));
  }

  #onClickButton() {
    this.#removeUsername();
    Renderer.hideLogout();
    Renderer.showLogin();
    Background.setBackground();
  }

  #removeUsername() {
    localStorage.removeItem('username');
  }

}

export default Logout;