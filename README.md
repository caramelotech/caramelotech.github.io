# Caramelo Tech - Site Oficial

Site da comunidade [Caramelo Tech](https://github.com/caramelotech): uma comunidade brasileira de tecnologia baseada em Fortaleza, Ceará, aberta ao mundo.

## Stack

- **React 18** + **TypeScript**
- **Vite** (bundler, dev server na porta 8080)
- **Tailwind CSS** + **shadcn/ui** + **Radix UI**
- **React Router DOM** (roteamento)
- **TanStack React Query** (data fetching)
- **React Hook Form** + **Zod** (formulários e validação)
- **Vitest** + **Testing Library** (testes unitários)
- **Playwright** (testes e2e)

## Rodando localmente

```bash
npm install
npm run dev       # servidor em http://localhost:8080
```

## Scripts disponíveis

| Comando              | Descrição                    |
| -------------------- | ---------------------------- |
| `npm run dev`        | Servidor de desenvolvimento  |
| `npm run build`      | Build de produção            |
| `npm run preview`    | Pré-visualização do build    |
| `npm run lint`       | Lint com ESLint              |
| `npm run lint:fix`   | Lint com correção automática |
| `npm run test`       | Testes unitários (Vitest)    |
| `npm run test:watch` | Testes em modo watch         |

## Estrutura

```
src/
  components/       # Componentes da UI (seções do site e shadcn/ui)
  data/             # Dados estáticos (projetos, membros, etc.)
  hooks/            # Custom hooks
  lib/              # Utilitários
  pages/            # Páginas (Index, NotFound)
  types/            # Schemas e tipos TypeScript
```

## Contribuindo

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/)
4. Abra um Pull Request

Dê uma estrela nos repos que curtir, abra issues com bugs ou sugestões, e compartilhe ideias - nenhuma contribuição é pequena demais!

## Links

- Site: [caramelotech.com.br](https://caramelotech.com.br)
- GitHub: [github.com/caramelotech](https://github.com/caramelotech)
- Instagram: [@caramelo_tech](https://www.instagram.com/caramelo_tech)
