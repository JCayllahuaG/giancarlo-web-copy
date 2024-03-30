import http from '@/shared/services/http-common'
export class IdentityAccessManagementService {
  getAllUsers() {
    return http.get('/users')
  }
  getUserById(id) {
    return http.get(`/users/${id}`)
  }
  postUser(userData) {
    return http.post('/users', userData)
  }
  getUserByEmail(email) {
    return http.get(`/users?email=${email}`)
  }
}
