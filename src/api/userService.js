import http from "../http";

class UserService {
  getAll() {
    return http.get("/api/members");
  }

  get(id) {
    return http.get(`/api/members/${id}`);
  }

  create(data) {
    return http.post("/api/members", data);
  }

  update(id, data) {
    return http.put(`/api/members/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/members/${id}`);
  }
}

export default new UserService();
