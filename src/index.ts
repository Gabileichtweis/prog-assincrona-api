import axios from 'axios';
import express, { Request, Response } from 'express';
import { Calculadora } from './models/calculadora';

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
  const api = express();
  api.use(express.json());

  api.listen(5000, () => {
    console.log('API ta rodandoooo');
  });

  api.get(
    '/calculadora?operacao=somar&valorA=7&valorB=13',
    (req: Request, res: Response) => {
      try {
        const { operacao, valorA, valorB } = req.params;

        if (operacao == 'somar') {
          let resultado = valorA + valorB;
          return res.status(200).send({
            ok: true,
            message: 'teste',
          });
        }
      } catch (error: any) {
        return res.status(500).send({
          ok: false,
          message: error.toString(),
        });
      }
    }
  );

  api.get(
    '/calculadora?operacao=subtrair&valorA=30&valorB=13',
    (req: Request, res: Response) => {
      try {
        const { operacao, valorA, valorB } = req.params;

        if (operacao == 'subtrair') {
          let resultado = valorA - valorB;
          return res.status(200).send({
            ok: true,
            message: 'teste 2',
          });
        }
      } catch (error: any) {
        return res.status(500).send({
          ok: false,
          message: error.toString(),
        });
      }
    }
  );

  api.get(
    '/calculadora?operacao=multiplicar&valorA=8&valorB=8',
    (req: Request, res: Response) => {
      try {
        const { operacao, valorA, valorB } = req.params;

        if (operacao == 'multiplicar') {
          let resultado = valorA * valorB;
          return res.status(200).send({
            ok: true,
            message: 'teste 2',
          });
        }
      } catch (error: any) {
        return res.status(500).send({
          ok: false,
          message: error.toString(),
        });
      }
    }
  );

  api.get(
    '/calculadora?operacao=dividir&valorA=120&valorB=10',
    (req: Request, res: Response) => {
      try {
        const { operacao, valorA, valorB } = req.params;

        if (operacao == 'multiplicar') {
          let resultado = valorA / valorB;
          return res.status(200).send({
            ok: true,
            message: 'teste 3',
          });
        }
      } catch (error: any) {
        return res.status(500).send({
          ok: false,
          message: error.toString(),
        });
      }
    }
  );
}
atividade2();

function atividade3() {}
atividade3();
