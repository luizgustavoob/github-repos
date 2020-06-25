class UserController {

  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputSearch = $("#search");
    this._viewUser = new UserView($("#viewUser"));
    this._service = new HttpService();
  }

  findUser(e) {
    e.preventDefault();
    const nameUser = this._inputSearch.value;
    if (nameUser) {
      this._service.findAllInfoUser(nameUser)
        .then(data => this._buildUser(data))
        .then(user => this.render(user))
        .catch(err => console.error(err));
    } else {
      this.render();
    }
  }  

  render(user = {}) {
    this._viewUser.render(user);
  }

  _buildUser(data) {
    const infoUser = data[0];
    const infoRepos = data[1];
    const user = new User(infoUser, infoRepos);
    return new Promise((resolve, reject) => {
      resolve(user);
    });
  }
}