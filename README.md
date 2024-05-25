# Comic Character Application

## Objetivo
Desenvolver uma aplicação de listagem e detalhe de personagens de quadrinhos utilizando a API da Marvel. A aplicação deve ser uma SPA (single page application) desenvolvida em React, e será disponibilizada em uma URL pública para avaliação. O código-fonte deve estar em um repositório Git, com commits representando cada fase do desenvolvimento.

## Requisitos
- **SPA em React**: A aplicação deve ser desenvolvida como uma single page application utilizando React.
- **Sem bibliotecas de UI**: Não utilizar bibliotecas de UI como Bootstrap, Semantic UI, ou Ant Design.
- **API da Marvel**: Utilizar a API da Marvel para obter dados dos personagens.
- **URL Pública**: A aplicação deve estar rodando em uma URL pública para avaliação.
- **Repositório Git**: O código deve estar em um repositório Git de sua preferência, com commits detalhando cada fase do desenvolvimento.
- **Seguir Layout**: Seguir o layout fornecido, respeitando as páginas, funcionalidades e componentes especificados.

## Requisitos Funcionais
### Página de Listagem de Personagens (Home)
- Exibir os 20 primeiros resultados da API.
- Permitir ordenação por nome do personagem.
- Permitir filtrar por nome através de um campo de busca.
- Permitir mostrar apenas os personagens favoritos.
- Permitir favoritar/desfavoritar até 5 personagens.

### Página de Detalhe do Personagem
- Exibir dados do personagem.
- Exibir os últimos 10 quadrinhos lançados deste personagem (baseado no onSaleDate).
- Permitir favoritar/desfavoritar (dentro do limite de 5).

## Bônus (Não Obrigatório)
- Adicionar paginação à listagem para exibir mais que os 20 personagens iniciais.
- Persistir os dados de favoritos (para manter os dados após o reload da página).
- Layout responsivo.
- Utilização de ES6+.
- Utilização de ferramentas para garantir a qualidade do código.
- Teste e2e.
- CI/CD.

## Dicas
- Valorizamos muito testes em nosso processo de desenvolvimento.
- Todos os desenvolvedores no LuizaLabs podem participar do processo de avaliação técnica, então oriente os avaliadores a como instalar, testar e executar seu código.

## Instalação e Execução
### Pré-requisitos
- Node.js (versão 16 ou superior)
- yarn

### Passos para Instalação
1. Clone o repositório:
   ```bash
     git clone <URL do Repositório>
   ```

2.  Instale as dependências:
   ```bash
    yarn install
  ```
3.  Inicie a aplicação:
   ```bash
    yarn start
  ```

4. Abra o navegador em http://localhost:3000/

## Testes
### Cypress
```bash
  yarn cypress:run
```

### Unit
```bash
  yarn test
```
