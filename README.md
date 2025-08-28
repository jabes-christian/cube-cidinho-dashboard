# Cube Dashboard - Cidinho Santos

## Descrição do Projeto

Dashboard CUBE é um aplicativo frontend para dashboard de análise de dados populacionais e narrativas, focado em pautas políticas e sociais do Canditado Cidinho Santos no estado de Mato Grosso (MT). O projeto inclui componentes como PautasNarrativas, BaseEleitoral e outros, utilizando uma interface responsiva com edição de campos e visualizações de progresso. Ele foi desenvolvido para fornecer insights sobre pautas principais, narrativas dominantes e perfis socioeconômicos, com suporte a edição administrativa.

## Como Executar

Para rodar o projeto localmente, siga estes passos:

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd cube-pulse-single
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em `http://localhost:8080/`.

## Execução via Docker

Como alternativa, você pode executar a aplicação usando Docker. Certifique-se de ter Docker e Docker Compose instalados.

1. Construa e inicie o container:
   ```bash
   docker-compose up --build
   ```

2. A aplicação estará disponível em `http://localhost:8080/`.

Para parar, use `docker-compose down`.

## Tecnologias Usadas

- **Vite**: Para build e desenvolvimento rápido.
- **React**: Biblioteca principal para construção da UI.
- **TypeScript**: Para tipagem estática e maior segurança no código.
- **shadcn-ui**: Componentes UI reutilizáveis e acessíveis.
- **Tailwind CSS**: Framework de estilização utility-first para design responsivo.

## Futuras Aplicações

Planejamos expandir o projeto com integração a um backend para dados reais (ex.: API REST ou GraphQL), adição de autenticação avançada, gráficos interativos com bibliotecas como Chart.js ou Recharts, suporte a temas dark/light, e otimizações de performance para grandes volumes de dados. Além disso, visamos implementar testes unitários com Jest e deploy automatizado para plataformas como Vercel ou Netlify.

## Status Atual

O projeto está em fase de desenvolvimento, com componentes principais implementados e refinamentos recentes em responsividade (ex.: grids ajustadas com Tailwind breakpoints em PautasNarrativas.tsx). Funcionalidades como edição de campos e visualizações de progresso estão operacionais. Testes locais via `npm run dev` confirmam estabilidade, mas ainda sem integração backend ou deploy em produção.

## Autor

- Jabes Chistian - [LinkedIn](https://www.linkedin.com/in/jabes-chistian)
