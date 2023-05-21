import axios from 'axios';

function atividade1() {
  /* 

*/
  /* 
getRepositories(repo: string) {
    axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Repositório não existe');
    })
    }
    
    Github.getRepositories('marcelo-growdev/scrapbook-es6');
    Github.getRepositories('marcelo-growdev/qdbqqbqwn');
    */

  function getUserFromGithub(user: string) {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('Usuário não existe');
      });
  }
  getUserFromGithub('djunior97');
  getUserFromGithub('djunioriqdivqv97');
}
atividade1();

function atividade2() {}
atividade2();

function atividade3() {}
atividade3();
