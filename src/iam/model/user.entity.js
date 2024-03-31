export class User {
  constructor(email, password) {
    this.id = 0
    this.email = email
    this.userName = email.split('@')[0]
    this.password = password
    this.loggedIn = false
  }

  login() {
    this.loggedIn = true
  }
  logout() {
    this.loggedIn = false
  }
}
