import axios from 'axios';

function atividade1() {
  async function getUserFromGithub(user: string) {
    try {
      let usuarios = await axios.get(`https://api.github.com/users/${user}`);
      console.log(usuarios.data);
    } catch {
      console.log('Usuário não existe');
    }
  }
  getUserFromGithub('djunior97');
  getUserFromGithub('djunioriqdivqv97');

  async function getRepositories(repo: string) {
    try {
      let respositorios = await axios.get(
        `https://api.github.com/repos/${repo}`
      );
      console.log(respositorios.data);
    } catch {
      console.log('Repositório não existe');
    }
  }

  getRepositories('marcelo-growdev/scrapbook-es6');
  getRepositories('marcelo-growdev/qdbqqbqwn');
}
atividade1();

function atividade2() {}
atividade2();

function atividade3() {}
atividade3();
