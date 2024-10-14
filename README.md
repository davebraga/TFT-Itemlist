# TFT Cheatlist

Este projeto é uma aplicação web que exibe uma tabela de combinações de itens do Teamfight Tactics (TFT). Os itens são organizados de forma a permitir fácil visualização e acesso às suas combinações. A aplicação foi construída utilizando Node.js e Express, e carrega os dados dos itens a partir de um arquivo JSON.

## Estrutura do Projeto

- **index.html**: Arquivo principal da aplicação que contém a estrutura HTML e scripts JavaScript para a funcionalidade da tabela e modal.
- **server.js**: Servidor Node.js que serve os arquivos estáticos e fornece uma rota para carregar os dados dos itens.
- **data/**: Diretório que contém o arquivo `combinados.json` com as informações dos itens.
- **public/**: Diretório que contém arquivos estáticos, como imagens e estilos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para Node.js que simplifica a criação de servidores.
- **JavaScript**: Para manipulação do DOM e interatividade da aplicação.
- **HTML/CSS**: Para estruturação e estilo da aplicação.

## Como Funciona

1. O servidor Node.js é iniciado e escuta na porta 3000.
2. Ao acessar a raiz do servidor, a aplicação carrega o arquivo `index.html`.
3. O arquivo JavaScript no HTML faz uma requisição à rota `/combinados`, que retorna os dados dos itens em formato JSON.
4. Os dados são processados e uma tabela é gerada dinamicamente com as imagens dos itens, cada uma das quais, ao ser clicada, exibe uma pequena janela ao lado com as informações do item (nome e descrição).

## Como Executar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node server.js
   ```

4. Acesse a aplicação no seu navegador em `http://localhost:3000`.

## Como Implantar

Para implantar a aplicação, você pode usar plataformas como:

- **Heroku**
- **Railway**
- **Render**
- **Glitch**
- **Vercel**
- **DigitalOcean App Platform**

## Contribuições

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias no projeto.

## Licença

Este projeto está licenciado sob a MIT License - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
