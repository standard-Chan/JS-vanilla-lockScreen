import Login from "./user/login.js";

class App {
  run() {
    this.login();
  }

  login() {
    const login = new Login();
    
  }
}

const app = new App();
app.run();

export default App;