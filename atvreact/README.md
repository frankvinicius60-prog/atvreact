# Componentes Reutilizáveis — Vite + React

Projeto desenvolvido para a atividade prática de reutilização de componentes.

## O que foi feito

- Projeto criado com Vite e React.
- Componente `Header` reutilizável para o cabeçalho.
- Componente `Card` reutilizável para os cartões.
- A página principal exibe um cabeçalho e três cartões numerados (1, 2 e 3).
- Os três cartões usam o mesmo componente `Card`, recebendo conteúdos diferentes por `props`.
- Layout responsivo para computadores e celulares.

## Como executar no VS Code

1. Instale o Node.js, caso ainda não esteja instalado.
2. Extraia o arquivo ZIP e abra a pasta do projeto no VS Code.
3. Abra o terminal integrado.
4. Execute:

```bash
npm install
npm run dev
```

5. Abra no navegador o endereço local exibido pelo Vite no terminal.

## Como gerar a versão de produção

```bash
npm run build
```

A pasta `dist` será criada automaticamente.

## Estrutura

```text
componentes_reutilizaveis_vite_react/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── components/
        ├── Header.jsx
        └── Card.jsx
```

Não envie a pasta `node_modules` ao GitHub. Ela será instalada com `npm install`.
