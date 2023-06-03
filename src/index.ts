import axios from 'axios';
import express, { Request, Response } from 'express';

const api = express();
api.use(express.json());

api.listen(3333, () => {
  console.log('API ta rodandoooo');
});

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

function atividade2() {
  api.get('/calculadora', (req: Request, res: Response) => {
    try {
      let operacao = req.query.operacao;
      let valorA = Number(req.query.valorA);
      let valorB = Number(req.query.valorB);

      if (operacao == 'somar') {
        let resultado = valorA + valorB;
        return res.status(200).send({
          ok: true,
          message: `${valorA} + ${valorB} = ${resultado}`,
        });
      }

      if (operacao == 'subtrair') {
        let resultado = valorA - valorB;
        return res.status(200).send({
          ok: true,
          message: `${valorA} - ${valorB} = ${resultado}`,
        });
      }

      if (operacao == 'multiplicar') {
        let resultado = valorA * valorB;
        return res.status(200).send({
          ok: true,
          message: `${valorA} * ${valorB} = ${resultado}`,
        });
      }

      if (operacao == 'dividir') {
        let resultado = valorA / valorB;
        return res.status(200).send({
          ok: true,
          message: `${valorA} / ${valorB} = ${resultado}`,
        });
      }
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  });
}

function atividade3() {
  let contador = 0;
  api.get('/contador', (req: Request, res: Response) => {
    try {
      contador++;
      console.log(contador);

      if (contador < 10) {
        return res.status(200).send({
          ok: true,
          message: `Contador: ${contador}`,
        });
      } else {
        contador = 0;
        return res.status(200).send({
          ok: true,
          message: `Contador chegou a 10`,
        });
      }
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  });
}

function atividade4() {
  api.get('/numeral', (req: Request, res: Response) => {
    let numero = Number(req.query.numero);
    let operacao = req.query.operacao;
    let resultado = 0;

    if (operacao === 'anterior') {
      resultado = numero - 1;
    }

    if (operacao === 'proximo') {
      resultado = numero + 1;
    }

    return res.status(200).send({
      ok: true,
      messege: `Operação: ${operacao}, Número: ${numero}, Resultado: ${resultado}`,
    });
  });
}
