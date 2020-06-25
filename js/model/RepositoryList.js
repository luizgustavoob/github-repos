class RepositoryList {
  
  constructor(list) {    
    this.list = list.map(repo => new Repository(repo));
    this.list.sort((a, b) => b['stargazers_count'] - a['stargazers_count']);
  }
}