class User {

  constructor(user, repos) {
    this.id = user.id;
    this.login = user.login;
    this.name = user.name;
    this.company = user.company;
    this.location = user.location;
    this.followers = user.followers;
    this.following = user.following;
    this.avatar_url = user.avatar_url;
    this.bio = user.bio;
    this.repos = new RepositoryList(repos);
  }
}