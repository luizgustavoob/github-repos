const BASE_URL = "https://api.github.com/users";

class HttpService {

  findAllInfoUser(nameUser) {
    return Promise.all([
      fetch(`${BASE_URL}/${nameUser}`).then(res => res.json()),
      fetch(`${BASE_URL}/${nameUser}/repos`).then(res => res.json())
    ]);
  }
}
