import Renderer from "../Renderer.js";


class Login {
  #element = {
    'login' : document.querySelector('#login'),
    'image' : document.querySelector('#login-image'),
    'form' : document.querySelector('#login-form'),
    'input' : document.querySelector('#login-input'),
    'button' : document.querySelector('#login-button')
  }

  constructor() {
    this.#initEvent();
  }

  #initEvent() {
    this.#element['form'].addEventListener('submit', this.#onSubmit.bind(this));
  }

  #onSubmit(event) {
    event.preventDefault();
    const username = this.#element['input'].value;
    this.#saveUsername(username);
    Renderer.hideLogin();
    Renderer.showLogout();
  }

  #saveUsername(username) {
    localStorage.setItem('username', username);
  }


}

export default Login;