
class LocalStorage {
  static isLoggedIn() {
    const username = localStorage.getItem('username');
    if (username === null)
      return false;
    return true;
  }

  static hasBackgroundNumber() {
    const background = localStorage.getItem('background');
    if (background === null)
      return false;
    return true;
  }
}

export default LocalStorage;