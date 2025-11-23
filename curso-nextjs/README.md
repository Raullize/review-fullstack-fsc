# Projeto do Mini Curso de Next.js

Este projeto foi criado com base no [MINI CURSO PRÁTICO DE NEXT.JS](https://www.youtube.com/watch?v=2CVTFPI1rKM) do canal Full Stack Club. O objetivo é demonstrar de forma prática os conceitos fundamentais e os recursos mais poderosos do Next.js, construindo uma pequena aplicação de listagem de produtos.

## O que é Next.js?

**Next.js** é um framework React para produção. Ele estende a biblioteca React, oferecendo uma estrutura robusta e opinativa que resolve muitos dos desafios comuns no desenvolvimento de aplicações web modernas, como roteamento, renderização e otimização.

### Biblioteca vs. Framework

- Uma **biblioteca** (como o React) é uma coleção de funcionalidades que você pode usar para uma parte específica da sua aplicação (neste caso, a UI). Ela não é opinativa, o que significa que você precisa tomar decisões e escolher outras ferramentas para tarefas como roteamento, data fetching, etc.
- Um **framework** (como o Next.js) é uma estrutura mais completa e opinativa. Ele fornece um esqueleto para sua aplicação e dita como ela deve ser organizada, já incluindo soluções integradas para roteamento, renderização, otimizações e muito mais.

## Principais Conceitos do Next.js

### Renderização no Servidor (SSR) e o App Router

O React, por padrão, renderiza no cliente (CSR - Client-Side Rendering), o que pode levar a problemas de SEO e performance inicial. O Next.js resolve isso com a renderização no servidor (SSR - Server-Side Rendering) e a geração de sites estáticos (SSG - Static Site Generation).

Com o **App Router**, o Next.js introduziu um novo paradigma baseado em **Server Components**.

### Server Components vs. Client Components

- **Server Components (Padrão):**
  - Rodam exclusivamente no servidor.
  - Podem acessar diretamente recursos de back-end (bancos de dados, APIs, arquivos do sistema).
  - Não são interativos (não usam `useState`, `useEffect`, `onClick`).
  - O código deles não é enviado para o navegador, resultando em um JavaScript menor no cliente.
  - São ideais para buscar dados e renderizar conteúdo estático.

- **Client Components:**
  - Para torná-los interativos, você precisa adicionar a diretiva `"use client"` no topo do arquivo.
  - Rodam tanto no servidor (para a renderização inicial) quanto no cliente.
  - Permitem interatividade (uso de `useState`, `useEffect`, eventos).
  - Não podem acessar diretamente recursos de back-end.

### Padrão de Composição e Boas Práticas

Uma dúvida comum é como usar um Server Component (que busca dados, por exemplo) dentro de um Client Component (que tem interatividade). **Você não pode importar um Server Component diretamente em um arquivo de Client Component**, pois isso "puxaria" o código do servidor para o cliente.

A maneira correta de fazer isso é através da composição, usando a prop `children`.

Neste projeto, a pasta `providers` foi criada para exemplificar este padrão. O `QueryProvider.tsx` é um Client Component (`"use client"`) que precisa envolver a aplicação para fornecer um contexto. Ele recebe os Server Components (como as páginas) através da prop `children`, permitindo que você tenha um layout interativo que renderiza conteúdo vindo diretamente do servidor.

```tsx
// app/layout.tsx (Server Component)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* QueryProvider (Client) envolve 'children' (Server) */}
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
```

#### Boas Práticas: Mantenha os Client Components "nas folhas"

Para obter a melhor performance, a principal recomendação é **manter os Client Components o mais específico e isolado possível** (nas "folhas" da sua árvore de componentes).

- **❌ Ruim:** Transformar uma página inteira em um Client Component (`"use client"` no topo de `page.tsx`) só porque uma pequena parte dela precisa de interatividade. Isso faz com que toda a página e seus dados sejam enviados e processados no cliente, perdendo os benefícios do SSR.

- **✅ Bom:** Manter a página como um Server Component e extrair apenas as partes interativas para seus próprios Client Components. Por exemplo, se você tem uma página de produtos que busca dados (Server) e um botão "Adicionar ao Carrinho" que precisa de estado (Client), crie um componente `AddToCartButton.tsx` com `"use client"` e importe-o na sua página.

Isso garante que o mínimo de JavaScript seja enviado ao navegador, resultando em um carregamento mais rápido e uma melhor experiência para o usuário.

### Roteamento Baseado em Arquivos (App Router)

O Next.js usa um sistema de roteamento baseado na estrutura de pastas dentro de `app`. Cada pasta representa um segmento da URL.

- **`app/products/page.tsx`** -> Acessível em `/products`.
- **`app/products/[productId]/page.tsx`** -> Rota dinâmica. Acessível em `/products/1`, `/products/abc`, etc. O valor de `productId` fica disponível como parâmetro.
- **`app/(protected)/products/page.tsx`** -> Grupos de Rota. Os parênteses `()` são ignorados na URL, servindo apenas para organizar o projeto e aplicar layouts específicos a um conjunto de rotas.

### Server Actions e Forms

**Server Actions** são funções assíncronas que rodam no servidor e podem ser chamadas diretamente de componentes, geralmente em resposta a interações do usuário, como o envio de um formulário. Elas simplificam mutações de dados (criar, atualizar, deletar) sem a necessidade de criar endpoints de API manualmente.

### Cache e Data Fetching

O Next.js possui um sistema de cache agressivo e inteligente. Por padrão, os resultados de `fetch` em Server Components são cacheados para otimizar a performance e reduzir o número de requisições. Esse comportamento pode ser controlado para revalidar os dados em intervalos de tempo específicos ou sob demanda.

### Hydration (Hidratação)

A hidratação é o processo pelo qual o Next.js "dá vida" ao HTML estático que foi pré-renderizado no servidor. Após o navegador receber o HTML, o JavaScript do React é executado para anexar os manipuladores de eventos e tornar a página interativa. É a mágica que une o melhor dos dois mundos: a performance do SSR com a interatividade de uma SPA.

## Como Rodar a Aplicação

Este projeto utiliza `npm` como gerenciador de pacotes.

1.  **Clone o repositório** e navegue até a pasta do projeto:
    ```bash
    git clone https://github.com/seu-usuario/review-fullstack-fsc.git
    cd review-fullstack-fsc/curso-nextjs
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:3000` e irá redirecionar automaticamente para a página de produtos.

## Build para Produção

Para criar uma versão otimizada da sua aplicação para implantação, execute o comando:

```bash
npm run build
```

Este comando cria uma pasta `.next` com os arquivos de build prontos para serem hospedados em uma plataforma compatível com Next.js, como a [Vercel](https://vercel.com/).
