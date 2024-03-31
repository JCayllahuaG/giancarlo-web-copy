import http from '@shared/services/http-common'
export class iamService {
  getAllUsers() {
    return http.get('/users')
  }
  getUserById(id) {
    return http.get(`/users/${id}`)
  }
  registerUser(userData) {
    return http.post('/users', userData)
  }
  getUserByEmail(email) {
    return http.get(`/users?email=${email}`)
  }
  loginUser(id) {
    return http.patch(`/users/${id}`, { loggedIn: true })
  }
}
