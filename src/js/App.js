import LocalStorage from "./LocalStorage.js";
import Renderer from "./Renderer.js";
import Login from "./user/login.js";
import Logout from "./user/Logout.js";
import Background from "./util/Background.js";
import Clock from "./util/Clock.js";
import Weather from "./util/Weather.js";

class App {
  run() {
    this.clock();
    this.weather();
    Background.setBackground();
    // window resize
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();

    this.login();
    this.logout();
  }

  login() {
    const login = new Login();
    if (LocalStorage.isLoggedIn()) {
      Renderer.hideLogin();
      Renderer.showLogout();
    }
    else {
      Renderer.showLogin();
    }
  }

  logout() {
    const logout = new Logout();
  }

  clock() {
    const clock = new Clock();
    clock.showClock();
  }

  resize() {
    const body = document.body;
    body.style.height = `${window.innerHeight}px`;
    body.style.width = `${window.innerWidth}px`;
  }

  weather() {
    const weather = new Weather();
  }
}

const app = new App();
app.run();

export default App;