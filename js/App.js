import LocalStorage from "./LocalStorage.js";
import Renderer from "./Renderer.js";
import Login from "./user/login.js";
import Logout from "./user/Logout.js";

class App {
  run() {
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
}

const app = new App();
app.run();

export default App;