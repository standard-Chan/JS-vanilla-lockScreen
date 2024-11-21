
class LocalStorage {
  static isLoggedIn() {
    const username = localStorage.getItem('username');
    if (username === null)
      return false;
    return true;
  }
}

export default LocalStorage;