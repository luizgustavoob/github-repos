class Repository {

  constructor(repo) {
    this.full_name = repo.full_name;
    this.description = repo.description;
    this.stargazers_count = repo.stargazers_count;
    this.language = repo.language;
    this.url = repo.html_url;
  }
}