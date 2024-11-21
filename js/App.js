import Login from "./user/login.js";
import Logout from "./user/Logout.js";

class App {
  run() {
    this.login();
    this.logout();
  }

  login() {
    const login = new Login();
    
  }

  logout() {
    const logout = new Logout();
  }
}

const app = new App();
app.run();

export default App;