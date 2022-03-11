<p align="center">
  <img src="./src/assets/logo-fortbrasil.png" width="320" alt="Logo FortBrasil" /></a>
</p>


## Technologias usadas neste projeto

<a href="https://nodejs.org/docs/latest-v15.x/api/" target="_blank"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" /></a> <a href="https://yarnpkg.com/getting-started/install" target="_blank"><img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" /></a> <a href="https://docs.docker.com/get-started/" target="_blank"><img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>   <a href="https://gitlab.com/Fortbrasil/microservicos/microservice-sendmail" target="_blank"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" /></a>


## Objetivo da API
Api para consulta de CEP com validações buscando CEP nos serviços dos Correios, BrasilAPI, ViaCEP e WideNet em NodeJs.

## Instalar pacotes
```bash
$ yarn install ou npm install
```

## Rodar em desenvolvimento
```bash
$ npm run dev ou yarn dev
```

## Rodar em Produção
```bash
$ npm run start ou yarn start
```

## Para acessar o cep, exemplo de uso
http://localhost:3000/consultacep/{numero_do_cep}

## Para acesso à URL/Doc Swagger
http://localhost:3000/doc/

## exemplo {numero_do_cep}:
/consultacep/61760000 <br>
/consultacep/61760-000

## Video Demo de Uso
<object width="425" height="350">
<param name="movie" value="https://youtu.be/lg7dwsxjlz4" />
<embed src="https://youtu.be/lg7dwsxjlz4" type="application/x-shockwave-flash" width="425" height="350" />
</object>

Não conseguiu ver? <a href="https://youtu.be/lg7dwsxjlz4">Clique Aqui</a>


