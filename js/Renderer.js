
class Renderer {
  static #HIDDEN_CONSTANT = 'hidden';
  static #element = {
    'loginContainer' : document.querySelector('#login'),
    'logoutContainer' : document.querySelector('#logout')
  }

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
}

export default Renderer;