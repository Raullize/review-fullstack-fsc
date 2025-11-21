# Projeto do Curso de React

Este projeto é o resultado prático do estudo do [Curso de React para Completos Iniciantes [2024]](https://www.youtube.com/watch?v=2RWsLmu8yVc) do canal Full Stack Club. O objetivo é aplicar e solidificar os conceitos fundamentais da biblioteca, construindo uma aplicação interativa e componentizada.

## O que é React?

**React** é uma biblioteca JavaScript de código aberto para construir interfaces de usuário (UI). Ele não é um framework completo, mas sim uma biblioteca focada na camada de visualização (*view*). Sua principal ideia é permitir que desenvolvedores criem UIs complexas a partir de pequenos e isolados pedaços de código chamados **componentes**.

### Conceitos Fundamentais

- **Componentes:** São os blocos de construção de uma aplicação React. Um componente é uma peça de UI reutilizável (como um botão, um formulário ou um card) que encapsula seu próprio HTML, CSS e JavaScript. Eles permitem dividir a interface em partes independentes, facilitando o desenvolvimento e a manutenção.

- **SPA (Single Page Application):** Aplicações React são, por padrão, SPAs. Isso significa que a aplicação consiste em uma única página HTML. Todo o conteúdo subsequente é carregado e renderizado dinamicamente com JavaScript, sem a necessidade de recarregar a página inteira. Isso proporciona uma experiência de usuário muito mais rápida e fluida.

- **Imports/Exports:** O React utiliza o sistema de módulos do ES6. Usamos `export` para disponibilizar um componente para o resto da aplicação e `import` para usá-lo em outros arquivos.

### React Hooks

Hooks são funções que permitem "enganchar" e usar o estado e outros recursos do React em componentes de função. Os mais comuns são:

- **`useState`**: Permite adicionar e gerenciar o estado (variáveis que mudam ao longo do tempo) dentro de um componente. Quando o estado muda, o React re-renderiza o componente para refletir essa mudança.
- **`useEffect`**: Permite executar "efeitos colaterais" em componentes. Isso inclui buscar dados de uma API, manipular o DOM diretamente ou configurar assinaturas. Ele pode ser configurado para rodar após a renderização, ou apenas quando uma de suas dependências mudar.

## Convenções de Nomenclatura

No universo JavaScript e React, é comum encontrar diferentes padrões de nomenclatura:

- **`camelCase`**: Usado para variáveis e funções (ex: `minhaVariavel`, `buscarDados`).
- **`PascalCase`**: Usado para nomear componentes React (ex: `MeuComponente`, `Header`)
- **`kebab-case`**: Comumente usado em nomes de arquivos CSS e URLs (ex: `meu-componente.css`).
- **`snake_case`**: Menos comum em JavaScript, mas pode aparecer em integrações com outras linguagens como Python ou em bancos de dados (ex: `minha_variavel`).

## Estilização com Tailwind CSS

Este projeto utiliza **Tailwind CSS**, um framework *utility-first* que fornece classes de baixo nível para construir designs diretamente no HTML. Ele permite estilizar componentes de forma rápida e consistente sem sair do arquivo do componente.

Para mais detalhes, consulte a [documentação oficial do Tailwind CSS](https://tailwindcss.com/docs).

## Dependências do Projeto

- **`react`**: A biblioteca principal do React.
- **`react-dom`**: Pacote que serve como a ponte entre o React e o DOM do navegador.
- **`react-router-dom`**: Biblioteca para gerenciar o roteamento em aplicações React, permitindo a navegação entre diferentes "páginas" em uma SPA.
- **`lucide-react`**: Uma biblioteca de ícones SVG leve e customizável.
- **`uuid`**: Usado para gerar IDs únicos, útil para criar chaves (`key`) para listas de elementos.

## Interagindo com APIs

Aplicações front-end modernas frequentemente precisam buscar ou enviar dados para um servidor (back-end). As duas formas mais comuns de fazer isso em React são:

- **`fetch()`**: Uma API nativa do navegador para fazer requisições HTTP. É simples e já vem incluída.
- **`axios`**: Uma biblioteca de terceiros que simplifica as requisições HTTP, oferecendo funcionalidades extras como cancelamento de requisições e tratamento de erros mais robusto.

## Padrões Avançados

- **Spread Operator (`...props`)**: O operador *spread* (`...`) é frequentemente usado para passar todas as propriedades (props) de um componente pai para um componente filho de uma só vez. Isso é útil para criar componentes que "envolvem" outros, sem precisar declarar cada prop manualmente.
  ```jsx
  function Wrapper(props) {
    // Passa todas as props recebidas para o componente Input
    return <Input {...props} />;
  }
  ```

- **`children` Prop**: É uma prop especial que contém o conteúdo que é passado *entre* as tags de abertura e fechamento de um componente. Permite criar componentes genéricos que podem "envolver" qualquer outro conteúdo.
  ```jsx
  <Card>
    {/* Este h1 é a prop 'children' do Card */}
    <h1>Título do Card</h1>
  </Card>
  ```

- **Query Params**: São parâmetros adicionados ao final de uma URL após um `?` (ex: `?search=react&page=2`). São usados para passar informações de estado ou filtros para uma página, como termos de busca ou paginação.

## Como Rodar a Aplicação

1.  **Clone o repositório** e navegue até a pasta do projeto:
    ```bash
    git clone https://github.com/seu-usuario/review-fullstack-fsc.git
    cd review-fullstack-fsc/curso-react
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## Build para Produção

Para criar uma versão otimizada da sua aplicação para implantação (deployment), execute o comando:

```bash
npm run build
```

Este comando cria uma pasta `dist` na raiz do projeto. O conteúdo desta pasta são os arquivos estáticos (HTML, CSS, JS) que você pode hospedar em qualquer serviço de hospedagem de sites estáticos.