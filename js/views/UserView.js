class UserView {

  constructor(element) {
    this._viewUser = element;
  }

  render(user = {}) {
    if (!user.id) {
      this._viewUser.innerHTML = `<div class="text-center mt-3"><h4>Sem dados para exibir :(</h4></div>`
    } else {
      this._viewUser.innerHTML = `
        <section class="profile">
          <div class="container">
            <div class="profile-data">
              <div class="user">
                <div class="user-thumb">
                  <img src=${user.avatar_url} alt=${user.name} />  
                </div>
                
                <p class="user-name mt-3">${user.name}</p>
                ${user.bio && `
                  <p class="user-bio mt-1 text-center">
                    "${user.bio}"
                  </p>
                `}
              </div>
            </div>

            <div class="details">
                <span class="info mr-5">Seguindo: ${user.following}</span>
                <span class="info mr-5">Seguidores: ${user.followers}</span>
                <span class="info">@${user.login}</span>              
            </div>
          </div>

          <table class="mt-5 table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome Repositório</th>
                    <th>Descrição</th>
                    <th>Estrelas</th>
                    <th>Linguagem</th>
                    <th>Link</th>
                </tr>
            </thead>
            
            <tbody>
              ${user.repos.list.map(repo => `
                <tr>
                  <td>${repo.full_name}</td>
                  <td>${repo.description ? repo.description : 'Sem descrição :('}</td>
                  <td>${repo.stargazers_count}</td>
                  <td>${repo.language ? repo.language : 'Sem linguagem definida :('}</td>
                  <td><a href="${repo.url}">Acesse</a></td>
                </tr>
              `).join('')}
            </tbody>
        </table>
        </section>
      `;
    }
  }
}