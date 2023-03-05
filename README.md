# Projeto básico de cypress

Um projeto básico utilizando as funções mais utilziadas em cypress, nos possibilitando ja criar casos de teste robustos e confiaveis.

## Pré Requisitos

è obrigatório ter o  Node.js and npm instalados para conseguir executar esse projeto.

> Eu usei a versão  `v18.13.0` and `8.19.3` do Node.js e npm, respectivamente. Eu indico usar a mesma versão, ou alguma que seja superior.

## Installation

Rode `npm install` (ou `npm i` versão reduzida) para instalar as dependências de desenvolvimento.

## Tests

Você pode rodars os testes simulando um desktop ou um dispositivo mobile.

### Desktop

Rode `npx cypress run` para rodar o teste em headless mode (debaixo dos panos) em um desktop.

ou, rode `npx cypress open` para abrir o Cypress em modo interativo em um desktop.

### Mobile

É possível acessar o arquivo `cypress.config.js` e escolher o viewport mobile, que no caso é o viewportWidth: 410 e viewportHeight: 860 (apenas descomentando as linhas)

## Obrigado por ter visitado meu projeto

Se vc quiser dar uma moral, deixa uma: ⭐.

___

Esse projeto foi criado com base em um curso ministrado pelo> [Walmyr](https://walmyr.dev).
